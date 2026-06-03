"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icons } from "@/components/common/icons";
import { ProjectInterface } from "@/config/projects";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  project: ProjectInterface;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

// Server-side base64 decryption helper (retained if needed for embed type checking)
const getSecureUrl = (scrambled?: string): string => {
  if (!scrambled) return "";
  if (scrambled.startsWith("/") || scrambled.startsWith("http://") || scrambled.startsWith("https://")) {
    return scrambled;
  }
  try {
    const decoded = atob(scrambled);
    if (decoded.startsWith("/") || decoded.startsWith("http://") || decoded.startsWith("https://")) {
      return decoded;
    }
    return scrambled;
  } catch (e) {
    return scrambled;
  }
};

const getMediaTypeAndUrl = (
  project: ProjectInterface
): { type: "youtube" | "vimeo" | "mp4"; url: string } => {
  if (!project.videoUrl) return { type: "mp4", url: "" };

  const decrypted = getSecureUrl(project.videoUrl);

  // YouTube match
  const ytMatch = decrypted.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: "youtube",
      url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
    };
  }

  // Vimeo match
  const vimeoMatch = decrypted.match(/vimeo\.com\/(?:video\/)?([0-9]+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: "vimeo",
      url: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&loop=0&byline=0&portrait=0&title=0`,
    };
  }

  // Direct files use our controlled video delivery endpoint to hide source URLs
  return { type: "mp4", url: `/api/video?id=${project.id}` };
};

const WATERMARK_POSITIONS = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "center",
] as const;

// 1. MEMOIZED WATERMARK: updates locally so changing position never re-renders the main modal video player
const WatermarkOverlay = React.memo(() => {
  const [watermarkPos, setWatermarkPos] = useState<
    typeof WATERMARK_POSITIONS[number]
  >("center");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPos =
        WATERMARK_POSITIONS[
        Math.floor(Math.random() * WATERMARK_POSITIONS.length)
        ];
      setWatermarkPos(randomPos);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 select-none overflow-hidden">
      <span
        className={cn(
          "absolute text-xs md:text-sm font-sans tracking-[0.3em] font-extrabold text-white opacity-[0.06] transition-all duration-[1000ms] ease-in-out select-none",
          {
            "top-6 left-6": watermarkPos === "top-left",
            "top-6 right-6": watermarkPos === "top-right",
            "bottom-20 left-6": watermarkPos === "bottom-left",
            "bottom-20 right-6": watermarkPos === "bottom-right",
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":
              watermarkPos === "center",
          }
        )}
      >
        SHIVAM GUPTA
      </span>
    </div>
  );
});
WatermarkOverlay.displayName = "WatermarkOverlay";

export default function VideoModal({
  project,
  onClose,
  onPrev,
  onNext,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDevToolsDetected, setIsDevToolsDetected] = useState(false);

  const { type, url } = getMediaTypeAndUrl(project);

  // Keyboard protection (blocks DevTools, view source, and save functions on Windows & macOS)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC & Arrow Navigation
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      }

      // F12 Blocker
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Ctrl/Cmd + S (Save), Ctrl/Cmd + U (View Source)
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" || e.key === "S" || e.key === "u" || e.key === "U")
      ) {
        e.preventDefault();
      }

      // Ctrl/Cmd + Shift + I/J/C (Inspect / Console / Element Selection)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === "I" ||
          e.key === "i" ||
          e.key === "J" ||
          e.key === "j" ||
          e.key === "C" ||
          e.key === "c")
      ) {
        e.preventDefault();
      }

      // Ctrl/Cmd + Option + I/J/C (Mac DevTools shortcut variants)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.altKey &&
        (e.key === "i" ||
          e.key === "I" ||
          e.key === "j" ||
          e.key === "J" ||
          e.key === "c" ||
          e.key === "C")
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // DevTools detection loop (performant docked window dimension inspector)
  useEffect(() => {
    const detectDevTools = () => {
      const threshold = 160;
      const isDocked =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      if (isDocked) {
        setIsDevToolsDetected(true);
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      } else {
        setIsDevToolsDetected(false);
      }
    };

    const interval = setInterval(detectDevTools, 1500);
    detectDevTools();

    return () => clearInterval(interval);
  }, []);

  const preventDefaults = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Determine modal width & aspect ratio class based on project's metadata (eliminates scaling calculations)
  const aspectClass = cn({
    "max-w-[1200px] w-full aspect-video":
      project.aspectRatio === "video" || !project.aspectRatio,

    "max-w-[700px] w-full aspect-square":
      project.aspectRatio === "square",

    "max-w-[600px] w-full aspect-[4/5]":
      project.aspectRatio === "portrait",

    "max-w-[450px] w-full aspect-[9/16]":
      project.aspectRatio === "reels",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 select-none"
      onContextMenu={preventDefaults}
    >
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Navigation: Previous Button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full border border-white/10 bg-black/30 hover:bg-black/80 hover:scale-110 text-white transition-all focus:outline-none"
          aria-label="Previous Project"
          onContextMenu={preventDefaults}
        >
          <Icons.chevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Navigation: Next Button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full border border-white/10 bg-black/30 hover:bg-black/80 hover:scale-110 text-white transition-all focus:outline-none"
          aria-label="Next Project"
          onContextMenu={preventDefaults}
        >
          <Icons.chevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Modal Container: Video Only */}
      <div
        className={cn(
          "relative bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10",
          "max-h-[80vh]",
          aspectClass
        )}
        onContextMenu={preventDefaults}
      >
        {/* Close button in modal corner */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-35 p-2 rounded-full border border-white/10 bg-black/40 hover:bg-black/80 hover:scale-105 text-white transition-all focus:outline-none"
          aria-label="Close modal"
          onContextMenu={preventDefaults}
        >
          <Icons.close className="h-4 w-4" />
        </button>

        {/* DevTools Warning Overlay */}
        {isDevToolsDetected && (
          <div
            className="absolute inset-0 bg-black/90 z-30 flex flex-col items-center justify-center p-6 text-center select-none"
            onContextMenu={preventDefaults}
          >
            <Icons.warning className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">
              Source Code Inspection Restricted
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm font-normal">
              To protect the visual assets in this portfolio, playback is
              disabled while developer tools are active.
            </p>
          </div>
        )}

        {/* Video Protection Overlay (Covers the top 80% to block drags & right clicks on video frames) */}
        <div
          className="absolute top-0 inset-x-0 bottom-16 z-25 cursor-default"
          onContextMenu={preventDefaults}
          onDragStart={preventDefaults}
        />

        {/* Subtle Randomized Dynamic Watermark Overlay (Isolated to prevent player re-renders) */}
        <WatermarkOverlay />

        {/* Video Player Frame with GPU composition promotion */}
        <div
          className="w-full h-full relative"
          onContextMenu={preventDefaults}
          style={{ willChange: "transform" }}
        >
          {project.videoUrl ? (
            type === "mp4" ? (
              <video
                ref={videoRef}
                src={url}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
                preload="metadata"
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                onContextMenu={preventDefaults}
                draggable={false}
                onDragStart={preventDefaults}
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                }}
              />
            ) : (
              <iframe
                src={url}
                className="w-full h-full border-none pointer-events-none select-none"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                onContextMenu={preventDefaults}
              />
            )
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-500 select-none">
              No video available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
