"use client";

import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type CreativePortfolioLinkProps = {
  className?: string;
};

export function CreativePortfolioLink({ className }: CreativePortfolioLinkProps) {
  return (
    <Link
      href={"/about"}
      aria-label="View About Page"
      className={cn(
        "inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background/60 px-3 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
    >
      <span className="hidden items-center gap-2 sm:inline-flex">
        <Icons.user className="h-3.5 w-3.5" />
        <span className="font-medium">About Me</span>
        <span className="text-muted-foreground/60">·</span>
      </span>
      <Icons.star className="h-3.5 w-3.5" />
      <span className="font-medium tabular-nums">Portfolio</span>
    </Link>
  );
}

// Keep the original export name so existing imports still work
export { CreativePortfolioLink as GitHubStarBadge };
