import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, GraduationCap, Palette, Sparkles, Trophy, Video } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: "About | Shivam Gupta",
  description: "Learn more about Shivam Gupta, a Motion Designer Artist and Video Editor.",
};

const SKILLS = [
  { name: "Premiere Pro", icon: Video },
  { name: "After Effects", icon: Sparkles },
  { name: "Photoshop", icon: Palette },
  { name: "Illustrator", icon: Palette },
  { name: "Cinema 4D", icon: Film },
  { name: "AI Prompting", icon: Sparkles },
];

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24 max-w-6xl mx-auto min-h-[calc(100vh-200px)]">
      <AnimatedSection direction="up" className="flex flex-col text-center space-y-4 mb-16">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight">Behind the Visuals</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I am a versatile creative professional dedicated to crafting stories that move, engage, and inspire audiences.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
        {/* Profile Image */}
        <AnimatedSection delay={0.2} direction="up" className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={profileImg}
            alt="Shivam Gupta"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection delay={0.4} direction="up" className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-3xl font-heading mb-6">The Journey So Far</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                With over <strong>6+ years of experience</strong> in video editing, and motion graphics, I've had the privilege of transforming complex ideas into compelling visual narratives.
              </p>
              <p>
                My work spans across dynamic social media reels, high-end brand films, and comprehensive visual identities. I believe that good design is not just about making things look beautiful—it's about driving results, solving problems, and connecting with the viewer on an emotional level.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 border border-border/50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Creative Toolkit
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full text-sm font-medium">
                  <skill.icon className="w-4 h-4 text-muted-foreground" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "group w-full sm:w-auto px-8")}
            >
              Let's Create Together
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Education & Achievements */}
      <AnimatedSection delay={0.5} direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Education */}
        <div className="bg-card border border-border/50 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <GraduationCap className="w-32 h-32 text-primary" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading">Education</h3>
          </div>
          <div className="space-y-4 relative z-10">
            <div>
              <h4 className="text-lg font-semibold">BVoc Degree</h4>
              <p className="text-primary font-medium">Tata Institute of Social Sciences (TISS)</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A highly practical, career-focused, and industry-relevant degree program. The curriculum bypassed generic academics to focus entirely on core creative disciplines:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Video Editing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Animation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 3D Design
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-card border border-border/50 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Trophy className="w-32 h-32 text-primary" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading">Achievements</h3>
          </div>
          <div className="space-y-4 relative z-10">
            <div className="p-4 bg-muted/50 rounded-xl border border-border/50 border-l-4 border-l-primary">
              <h4 className="text-lg font-semibold mb-1">1st Prize Winner – IMA Motion Graphics Competition</h4>
              <p className="text-sm text-muted-foreground">Indore Management Association (IMA), Madhya Pradesh</p>
            </div>
            <p className="text-muted-foreground leading-relaxed pt-2">
              Won 1st Prize in the IMA Motion Graphics Competition, demonstrating excellence in motion design, visual communication, and creative storytelling through high-impact animation work.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Philosophy / Value Proposition */}
      <AnimatedSection delay={0.6} direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Palette className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Brand Identity</h3>
          <p className="text-muted-foreground">Crafting memorable logos, color palettes, and visual systems that make your brand stand out in a crowded market.</p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Film className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Cinematic Edits</h3>
          <p className="text-muted-foreground">Delivering highly engaging, pace-driven video edits tailored for both social media algorithms and long-form storytelling.</p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Motion Graphics</h3>
          <p className="text-muted-foreground">Adding dynamic energy to your projects with custom kinetic typography, 2D animations, and seamless visual effects.</p>
        </div>
      </AnimatedSection>
    </div>
  );
}
