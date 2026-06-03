"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { ProjectInterface } from "@/config/projects";
import ProjectCard from "./project-card";
import VideoModal from "./video-modal";

interface ProjectsShowcaseProps {
  projects: ProjectInterface[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(
    null
  );

  const handlePrev = () => {
    setSelectedProjectIndex((prev) =>
      prev !== null ? (prev - 1 + projects.length) % projects.length : null
    );
  };

  const handleNext = () => {
    setSelectedProjectIndex((prev) =>
      prev !== null ? (prev + 1) % projects.length : null
    );
  };

  const activeProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <div className="relative">
      {/* react-masonry-css grid integration with Tailwind spacing classes */}
      <Masonry
        breakpointCols={{ default: 5, 1536: 5, 1280: 4, 1024: 3, 768: 2, 640: 1 }}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding space-y-4"
      >
        {projects.map((project, index) => (
          <div key={project.id} className="transition-all duration-300">
            <ProjectCard
              project={project}
              onClick={() => setSelectedProjectIndex(index)}
            />
          </div>
        ))}
      </Masonry>

      {/* Premium Video Modal Overlay */}
      {activeProject && (
        <VideoModal
          project={activeProject}
          onClose={() => setSelectedProjectIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
