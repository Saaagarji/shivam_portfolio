"use client";

import React, { useRef } from "react";
import { ProjectInterface } from "@/config/projects";
import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play prevented: ", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const preventDefaults = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Map aspect ratio constants to Tailwind aspect classes
  const aspectClass = cn({
    "aspect-video": project.aspectRatio === "video" || !project.aspectRatio,
    "aspect-square": project.aspectRatio === "square",
    "aspect-[4/5]": project.aspectRatio === "portrait",
    "aspect-[9/13]": project.aspectRatio === "reels",
  });

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onContextMenu={preventDefaults}
      className="group block w-full text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-2xl select-none"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 h-full flex flex-col transition-all duration-500 hover:border-primary/40 hover:shadow-lg">
        {/* Media Container */}
        <div className={cn("relative w-full overflow-hidden rounded-xl bg-muted flex-shrink-0", aspectClass)}>

          {/* Transparent Protection Overlay */}
          <div
            className="absolute inset-0 z-20"
            onContextMenu={preventDefaults}
            onDragStart={preventDefaults}
          />

          {/* Static Thumbnail Image (fades out on hover to reveal video underneath) */}
          {project.thumbnail && (
            <img
              src={project.thumbnail}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 z-10 pointer-events-none"
              draggable={false}
              onDragStart={preventDefaults}
            />
          )}

          {/* Hover Video Preview (shows first frame on mount, plays on hover) */}
          {project.videoUrl && (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover pointer-events-none"
              src={`/api/video?id=${project.id}`}
              poster={project.thumbnail || undefined}
              loop
              muted
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
          )}

          {/* Play Indicator Overlay */}
          <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border/20 bg-background/40 backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
            <Icons.play className="h-4 w-4 text-foreground fill-foreground ml-0.5" />
          </div>

          {/* Gradient Visual Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        {/* Text Details */}
        {/* <div className="pt-4 px-2 flex-grow flex flex-col justify-between">
          <div className="pt-3 border-t border-border/40 flex flex-wrap gap-1.5 items-center">
            {project.softwareUsed.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center rounded-full bg-secondary border border-border/50 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </button>
  );
}
