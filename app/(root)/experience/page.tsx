import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.experience.metadata.title} | Creative Journey`,
  description: `${pagesConfig.experience.metadata.description} Explore my career in motion design, video editing, and creative direction.`,
  keywords: [
    "motion designer experience",
    "video editor career",
    "creative professional journey",
    "freelance video editor",
    "after effects designer",
  ],
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description="Four years of creative work across studios, agencies, and global brand clients."
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  );
}
