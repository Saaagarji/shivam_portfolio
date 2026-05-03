import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "freelance-creative",
    position: "Senior Motion Designer & Video Editor",
    company: "Freelance / Self-Employed",
    location: "Mumbai, India",
    startDate: new Date("2022-01-01"),
    endDate: "Present",
    description: [
      "Delivering cinematic video edits, brand reels, and motion graphics for 30+ global brands.",
      "Creating social-first content strategies with high-impact short-form videos and reels.",
      "Developing complete visual identities including logos, style guides, and brand systems.",
    ],
    achievements: [
      "Delivered 300+ video projects across brand films, reels, and commercial ads with 100% client satisfaction.",
      "Grew clients' social media engagement by an average of 240% through strategic video content.",
      "Designed motion graphics packages for 3 nationally broadcast ad campaigns.",
      "Built recurring revenue from 15+ long-term client retainers in fashion, tech, and lifestyle verticals.",
      "Recognized as a top-rated creator on Fiverr with 5-star reviews across 80+ orders.",
    ],
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "Photoshop",
      "Illustrator",
      "Lightroom",
      "CapCut",
    ],
    logo: "/experience/keys-logo.png",
  },
  {
    id: "motion-studio",
    position: "Motion Graphics Designer",
    company: "PixelFrame Studio",
    location: "Bengaluru, India",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2021-12-31"),
    description: [
      "Created animated explainer videos and brand intro sequences for SaaS and fintech clients.",
      "Designed full motion graphics packages: titles, lower-thirds, transitions, and end cards.",
      "Collaborated with directors and editors on narrative-driven documentary projects.",
    ],
    achievements: [
      "Produced 40+ animated explainer videos delivered on time and within budget.",
      "Designed a motion graphics system adopted as the studio's default broadcast package.",
      "Reduced post-production turnaround time by 30% through template and workflow optimization.",
      "Won the studio's quarterly 'Best Reel' award for an Instagram campaign that reached 2M+ views.",
    ],
    skills: [
      "After Effects",
      "Adobe Premiere Pro",
      "Illustrator",
      "Cinema 4D",
      "Audition",
    ],
    companyUrl: "https://pixelframestudio.in",
    logo: "/experience/muzeai-logo.png",
  },
  {
    id: "creative-agency",
    position: "Junior Video Editor & Designer",
    company: "Brandwave Creative Agency",
    location: "Pune, India",
    startDate: new Date("2020-08-01"),
    endDate: new Date("2021-05-31"),
    description: [
      "Edited promotional videos, testimonials, and product launch films for 20+ brand clients.",
      "Designed social media graphics, banners, and campaign assets for digital marketing teams.",
      "Assisted the creative director in producing moodboards, storyboards, and pitch decks.",
    ],
    achievements: [
      "Edited 100+ videos in the first year, maintaining agency-standard quality and speed.",
      "Designed social assets that contributed to a 180% increase in client campaign CTR.",
      "Created a product launch reel that went viral on Instagram with 500K+ organic views.",
    ],
    skills: [
      "Adobe Premiere Pro",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Figma",
    ],
    companyUrl: "https://brandwave.in",
    logo: "/experience/builtdesign-logo.png",
  },
];
