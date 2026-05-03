import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
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

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "client") {
    projectArr = projectArr.filter((val) => val.type === "Client");
  } else if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static items-stretch">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default function ProjectsPage() {
  const tabItems = [
    {
      value: "all",
      label: "All Work",
      content: renderContent("all"),
    },
    {
      value: "client",
      label: "Client Projects",
      content: renderContent("client"),
    },
    {
      value: "personal",
      label: "Personal Projects",
      content: renderContent("personal"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description="From cinematic brand films to motion graphics and viral reels — every project crafted with intention."
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
