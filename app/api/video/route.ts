import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Projects } from "@/config/projects";

// Server-side base64 decryption (with plain URL bypass)
const decryptUrl = (scrambled?: string): string => {
  if (!scrambled) return "";
  
  // If it is already a plain URL or path, bypass decryption
  if (scrambled.startsWith("/") || scrambled.startsWith("http://") || scrambled.startsWith("https://")) {
    return scrambled;
  }

  try {
    const decoded = Buffer.from(scrambled, "base64").toString("utf-8");
    if (decoded.startsWith("/") || decoded.startsWith("http://") || decoded.startsWith("https://")) {
      return decoded;
    }
    return scrambled;
  } catch (e) {
    return scrambled;
  }
};

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return new NextResponse("Missing project ID", { status: 400 });
    }

    const project = Projects.find((p) => p.id === id);
    if (!project || !project.videoUrl) {
      return new NextResponse("Project video not found", { status: 404 });
    }

    const decryptedUrl = decryptUrl(project.videoUrl);

    // Handle external URLs (redirect to hide raw URL in the initial src)
    if (decryptedUrl.startsWith("http://") || decryptedUrl.startsWith("https://")) {
      return NextResponse.redirect(decryptedUrl);
    }

    // Handle local files (stream with HTTP Range/206 support)
    const cleanPath = decryptedUrl.startsWith("/") ? decryptedUrl.slice(1) : decryptedUrl;
    const filePath = path.join(process.cwd(), "public", cleanPath);

    if (!fs.existsSync(filePath)) {
      return new NextResponse("Video file not found on disk", { status: 404 });
    }

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.get("range");

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      if (start >= fileSize || end >= fileSize) {
        return new NextResponse("Requested range not satisfiable", {
          status: 416,
          headers: {
            "Content-Range": `bytes */${fileSize}`,
          },
        });
      }

      const chunksize = end - start + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      // Convert Node.js Readable stream to Web ReadableStream
      const stream = new ReadableStream({
        start(controller) {
          fileStream.on("data", (chunk) => controller.enqueue(chunk));
          fileStream.on("end", () => controller.close());
          fileStream.on("error", (err) => controller.error(err));
        },
        cancel() {
          fileStream.destroy();
        },
      });

      return new Response(stream, {
        status: 206,
        headers: {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize.toString(),
          "Content-Type": "video/mp4",
        },
      });
    } else {
      const fileStream = fs.createReadStream(filePath);

      const stream = new ReadableStream({
        start(controller) {
          fileStream.on("data", (chunk) => controller.enqueue(chunk));
          fileStream.on("end", () => controller.close());
          fileStream.on("error", (err) => controller.error(err));
        },
        cancel() {
          fileStream.destroy();
        },
      });

      return new Response(stream, {
        status: 200,
        headers: {
          "Content-Length": fileSize.toString(),
          "Content-Type": "video/mp4",
          "Accept-Ranges": "bytes",
        },
      });
    }
  } catch (error) {
    console.error("Video stream error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
