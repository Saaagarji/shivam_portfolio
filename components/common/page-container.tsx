import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  isFullWidth?: boolean;
}

export default function PageContainer({
  title,
  description,
  children,
  isFullWidth = false,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div className={cn("mx-auto w-full", isFullWidth ? "max-w-[95vw] px-4 md:px-8" : "container max-w-7xl")}>
        <PageHeader title={title} description={description} />
        <div className="overflow-x-hidden mt-6">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
