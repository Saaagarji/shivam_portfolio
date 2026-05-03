"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GithubRedirectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <Sparkles
            className={`w-12 h-12 transition-colors duration-300 ease-out ${
              isHovered ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          See the full portfolio?
        </h2>
        <p className="mt-2 mb-10 font-heading text-lg text-muted-foreground">
          Browse case studies, brand films, and motion work on Instagram.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-10 h-10 text-muted-foreground mb-5 fill-current"
        >
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.673 1.45.673 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-.16 1.35-.49.35-1.05.61-1.67.78-.63.17-1.3.26-2.02.26H0V4.51l6.938-.007zm-.34 5.798c.596 0 1.07-.14 1.44-.41.367-.27.55-.7.55-1.27 0-.32-.058-.59-.175-.8-.117-.22-.276-.39-.48-.52-.2-.13-.44-.22-.72-.27-.27-.05-.57-.08-.88-.08H3.5v3.35h3.1zm.17 6.018c.35 0 .67-.033.97-.1.3-.067.57-.18.79-.33.22-.15.4-.36.53-.62.13-.26.19-.59.19-.99 0-.78-.22-1.33-.67-1.64-.44-.32-1.02-.48-1.73-.48H3.5v4.16l3.27-.01zm8.545-7.184c.31.31.53.7.65 1.17h-4.4c.07-.48.28-.87.63-1.17.36-.3.8-.45 1.33-.45.56 0 1 .15 1.38.45h.41zM21.5 14.2h-6.64c.06.58.27 1.03.63 1.36.36.33.82.49 1.37.49.42 0 .79-.1 1.1-.3.31-.2.52-.44.62-.74h2.78c-.3.97-.82 1.72-1.57 2.24-.75.52-1.65.79-2.71.79-1.43 0-2.57-.44-3.42-1.33-.85-.89-1.28-2.11-1.28-3.64 0-1.48.42-2.68 1.25-3.58.83-.9 1.95-1.35 3.35-1.35 1.45 0 2.57.45 3.35 1.37.78.92 1.17 2.19 1.17 3.82v.83zm-3.84-5.57c-.25.27-.43.61-.55.99h3.81c-.05-.43-.23-.77-.52-1.03-.3-.26-.68-.39-1.12-.39-.48 0-.89.14-1.14.43h-.48z" />
        </svg>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href={"https://instagram.com/shivamgupta"}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-2 transition-all duration-300 py-6"
          )}
        >
          <span className="mr-2">View on Instagram</span>
          <ExternalLink className="w-5 h-5" />
        </Link>
      </CardFooter>
      <div
        className={`h-1 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </Card>
  );
}
