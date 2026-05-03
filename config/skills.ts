import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Adobe Premiere Pro",
    description:
      "Industry-standard video editing for cinematic cuts, color grading, and professional timelines.",
    rating: 5,
    icon: Icons.premierePro,
  },
  {
    name: "After Effects",
    description:
      "Powerful motion graphics, kinetic typography, and VFX compositing for broadcast-quality visuals.",
    rating: 5,
    icon: Icons.afterEffects,
  },
  {
    name: "Photoshop",
    description:
      "Pixel-perfect photo manipulation, compositing, and visual design for print and digital media.",
    rating: 5,
    icon: Icons.photoshop,
  },
  {
    name: "Illustrator",
    description:
      "Scalable vector graphics, logo design, and brand identity systems for any resolution.",
    rating: 5,
    icon: Icons.illustrator,
  },
  {
    name: "DaVinci Resolve",
    description:
      "Professional color science, HDR grading, and Fusion VFX for film-quality production.",
    rating: 4,
    icon: Icons.davinciResolve,
  },
  {
    name: "Figma",
    description:
      "Collaborative UI/UX design, interactive prototyping, and design system management.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "Cinema 4D",
    description:
      "3D modeling, rigging, and rendering for motion graphics and product visualization.",
    rating: 4,
    icon: Icons.cinema4d,
  },
  {
    name: "Blender",
    description:
      "Open-source 3D creation suite for modeling, animation, and Cycles/EEVEE rendering.",
    rating: 4,
    icon: Icons.blender,
  },
  {
    name: "Audition",
    description:
      "Professional audio mixing, noise reduction, and podcast/voiceover post-production.",
    rating: 4,
    icon: Icons.audition,
  },
  {
    name: "InDesign",
    description:
      "Editorial layout, multi-page documents, and print-ready brand collateral design.",
    rating: 4,
    icon: Icons.inDesign,
  },
  {
    name: "Lightroom",
    description:
      "Non-destructive photo editing, color presets, and batch processing for visual consistency.",
    rating: 5,
    icon: Icons.lightroom,
  },
  {
    name: "Midjourney",
    description:
      "AI-powered concept art generation for moodboards, storyboards, and creative exploration.",
    rating: 4,
    icon: Icons.midjourney,
  },
  {
    name: "RunwayML",
    description:
      "AI video generation, inpainting, and generative tools for next-gen creative workflows.",
    rating: 4,
    icon: Icons.runwayML,
  },
  {
    name: "CapCut",
    description:
      "Short-form video editing and social-ready reels with trending effects and transitions.",
    rating: 5,
    icon: Icons.capcut,
  },
  {
    name: "Final Cut Pro",
    description:
      "Apple-native non-linear video editing with Magnetic Timeline for fast creative delivery.",
    rating: 3,
    icon: Icons.finalCutPro,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
