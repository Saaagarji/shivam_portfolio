"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { ProjectInterface } from "@/config/projects";
import ProjectCard from "./project-card";
import VideoModal from "./video-modal";
import { AnimatedSection } from "@/components/common/animated-section";

interface FeaturedProjectsShowcaseProps {
  projects: ProjectInterface[];
}

export default function FeaturedProjectsShowcase({
  projects,
}: FeaturedProjectsShowcaseProps) {
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
    <div className="relative w-full">
      {/* Real Pinterest-style masonry grid layout with tight spacing */}
      <Masonry
        breakpointCols={{ default: 4, 1536: 4, 1280: 4, 1024: 3, 768: 2, 640: 1 }}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding space-y-4"
      >
        {projects.map((project, index) => (
          <div key={project.id} className="transition-all duration-300">
            <AnimatedSection
              delay={0.1 * ((index % 5) + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProjectIndex(index)}
              />
            </AnimatedSection>
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
