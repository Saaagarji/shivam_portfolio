import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectsShowcase from "@/components/projects/projects-showcase";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
  keywords: [
    "creative portfolio",
    "motion graphics reel",
    "video editing portfolio",
    "graphic design work",
    "brand identity design",
    "after effects animations",
    "freelance video editor",
  ],
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description="From cinematic brand films to motion graphics and character animations — every project crafted with intention."
      isFullWidth
    >
      <ProjectsShowcase projects={Projects} />
    </PageContainer>
  );
}
