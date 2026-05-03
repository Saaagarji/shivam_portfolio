import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Creative Platforms | Portfolio",
  description:
    "Find Shivam Gupta's creative work across Vimeo, Behance, Instagram, YouTube, and Fiverr.",
  keywords: [
    "video editor portfolio",
    "motion graphics reel",
    "Vimeo reel",
    "freelance video editor",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contributions`,
  },
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title="Creative Platforms"
      description="Explore my work across video, design, and creative platforms."
    >
      <ContributionCard
        contributions={contributionsUnsorted}
      />
    </PageContainer>
  );
}
