import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col group hover:border-primary/30 transition-all duration-300">
      <div className="relative w-full h-[200px] flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          className="border border-border object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
        />
        {/* Play overlay for video projects */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
            <Icons.play className="h-5 w-5 text-black ml-0.5" />
          </div>
        </div>
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow text-sm">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            View Project
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border hidden md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
