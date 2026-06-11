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
    name: "CapCut",
    description:
      "Short-form video editing and social-ready reels with trending effects and transitions.",
    rating: 5,
    icon: Icons.capcut,
  },
  {
    name: "Photoshop (Basic)",
    description:
      "Pixel-perfect photo manipulation, compositing, and visual design for print and digital media.",
    rating: 5,
    icon: Icons.photoshop,
  },
  {
    name: "Illustrator (Basic)",
    description:
      "Scalable vector graphics, logo design, and brand identity systems for any resolution.",
    rating: 5,
    icon: Icons.illustrator,
  },
  
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
