import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import FeaturedProjectsShowcase from "@/components/projects/featured-projects-showcase";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img2.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Shivam Gupta — Sr. Video Editor & Motion Graphics Artist. Crafting cinematic visuals, brand identities, and scroll-stopping content.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const SERVICES = [
  {
    icon: Icons.film,
    title: "Video Editing",
    description:
      "Cinematic cuts, color grading, and narrative-driven edits for brand films, documentaries, and commercials.",
  },
  {
    icon: Icons.layers,
    title: "Motion Graphics",
    description:
      "Animated title sequences, explainer videos, kinetic typography, and broadcast-quality motion packages.",
  },
  {
    icon: Icons.video,
    title: "Reels & Short-Form",
    description:
      "Scroll-stopping Reels, YouTube Shorts, and TikTok content optimized for maximum engagement.",
  },
  {
    icon: Icons.sparkles,
    title: "AI-Enhanced Creative",
    description:
      "Next-gen workflows using Midjourney, RunwayML, and AI tools to push creative boundaries.",
  },
];

const TOOLS = [
  { name: "Premiere Pro", icon: Icons.premierePro, color: "#9999FF" },
  { name: "After Effects", icon: Icons.afterEffects, color: "#9999FF" },
  { name: "Photoshop", icon: Icons.photoshop, color: "#31A8FF" },
  { name: "Illustrator", icon: Icons.illustrator, color: "#FF9A00" },
  { name: "CapCut", icon: Icons.capcut, color: "#000000" },
];

const STATS = [
  { value: "300+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5M+", label: "Views Generated" },
  { value: "4+", label: "Years Experience" },
];

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Motion Designer & Video Editor",
    sameAs: [siteConfig.links.instagram, siteConfig.links.youtube],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative space-y-6 pb-8 pt-6 mb-0 md:py-20 min-h-screen flex items-center overflow-hidden">
        {/* Subtle gradient background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        </div>

        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <AnimatedText delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open for Collaboration
            </span>
          </AnimatedText>

          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[12rem] border-4 border-primary/30 shadow-2xl"
            alt="Shivam Gupta — Motion Designer & Video Editor"
            priority
          />

          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Shivam Gupta
          </AnimatedText>

          <AnimatedText
            as="h2"
            delay={0.35}
            className="font-heading text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground"
          >
            Motion Designer · Video Editor
          </AnimatedText>

          <div className="mt-2 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              I craft cinematic visuals, scroll-stopping reels, and brand identities that
              make audiences stop — and feel something.
            </p>
          </div>

          <div className="flex flex-col mt-8 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.5}>
              <Link
                href={"/projects"}
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View creative work"
              >
                <Icons.play className="w-4 h-4 mr-2" /> View My Work
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.65}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact Shivam Gupta"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Let's Collaborate
              </Link>
            </AnimatedText>
          </div>

          {/* Stats strip */}
          <AnimatedText delay={0.9} className="w-full mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8 border-t border-border/50">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold font-heading">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedText>

          <AnimatedText delay={1.1}>
            <Icons.chevronDown className="h-6 w-6 mt-8 animate-bounce text-muted-foreground" />
          </AnimatedText>
        </div>
      </section>

      {/* ─── FEATURED WORK ───────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="w-full max-w-[75vw] mx-auto px-4 md:px-8 space-y-6 bg-muted py-10 mb-14 rounded-2xl md:rounded-3xl"
        id="work"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            From brand films to viral reels — a selection of projects that define my craft.
          </AnimatedText>
        </div>
        <div className="w-full">
          <FeaturedProjectsShowcase projects={featuredProjects} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Work
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* ─── SERVICES ────────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="services"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            What I Do
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            End-to-end creative services — from concept and storyboarding to final delivery.
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {SERVICES.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 h-full transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <div className="flex flex-col justify-start rounded-md p-6 gap-4">
                  <service.icon className="h-10 w-10 text-primary" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contact">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.contact className="mr-2 h-4 w-4" /> Start a Project
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* ─── EXPERIENCE ──────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Four years of professional creative work across agencies, studios, and global brands.
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Full Journey
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* ─── TOOLS ───────────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="tools"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Industry-standard creative software — from Adobe Suite to cutting-edge AI tools.
          </AnimatedText>
        </div>

        {/* Tools grid (logo pills) */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {TOOLS.map((tool, index) => (
            <AnimatedSection key={tool.name} delay={0.05 * index} direction="up">
              <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-muted hover:border-primary/30 cursor-default">
                <tool.icon className="h-4 w-4" style={{ color: tool.color }} />
                <span>{tool.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <SkillsCard skills={featuredSkills} />

        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> All Tools & Skills
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* ─── CTA BAND ─────────────────────────────────────────────────────── */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-16 my-14"
        id="cta"
      >
        <div className="mx-auto flex max-w-[52rem] flex-col items-center space-y-6 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl"
          >
            Ready to bring your vision to life?
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Whether you need a cinematic brand film, a viral reel, or a complete visual identity —
            let's create something extraordinary together.
          </AnimatedText>
          <AnimatedText delay={0.4} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              <Icons.contact className="mr-2 h-4 w-4" /> Get in Touch
            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Icons.instagram className="mr-2 h-4 w-4" /> View on Instagram
            </Link>
          </AnimatedText>
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
