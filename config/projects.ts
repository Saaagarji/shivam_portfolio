import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  videoUrl?: string;
}

export const Projects: ProjectInterface[] = [
  {
    id: "brand-reel-luxe",
    companyName: "Luxe Fashion Brand Film",
    type: "Client",
    category: ["Video Editing", "Motion Graphics", "Brand Identity"],
    shortDescription:
      "Cinematic brand film for a luxury fashion label — 60-second hero video shot and edited for seasonal campaign launch.",
    websiteLink: "https://vimeo.com/shivamgupta",
    techStack: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Lightroom"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-02-01"),
    companyLogoImg: "/projects/portfolio/logo.png",
    pagesInfoArr: [
      {
        title: "Hero Film",
        description:
          "A 60-second cinematic brand film capturing the essence of the luxury collection.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Produced a high-end brand film for a luxury fashion client launching their new seasonal collection. The project demanded a specific cinematic aesthetic — desaturated tones, slow-motion sequences, and seamless musical pacing.",
        "I was responsible for the complete post-production pipeline: rough cut, audio sync, color grading in DaVinci Resolve, motion graphic overlays in After Effects, and final export for both digital and broadcast delivery.",
      ],
      bullets: [
        "Directed post-production for a 60-second luxury brand film for digital and broadcast.",
        "Delivered a desaturated, cinematic color grade in DaVinci Resolve.",
        "Created custom lower-third animations and title sequences in After Effects.",
        "Reduced the editing timeline by 2 weeks through efficient proxy workflow setup.",
        "Delivered multiple aspect ratios: 16:9 for YouTube, 9:16 for Reels, 1:1 for feed.",
      ],
    },
  },
  {
    id: "motion-explainer",
    companyName: "SaaS Product Explainer",
    type: "Client",
    category: ["Motion Graphics", "Video Editing"],
    shortDescription:
      "2-minute animated explainer video for a fintech SaaS platform — script to final render, boosted conversion rates by 40%.",
    websiteLink: "https://vimeo.com/shivamgupta",
    techStack: ["After Effects", "Illustrator", "Audition", "Adobe Premiere Pro"],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2023-11-15"),
    companyLogoImg: "/projects/convot/logo.png",
    pagesInfoArr: [
      {
        title: "Animated Explainer",
        description:
          "Full motion graphics explainer video from storyboard through final delivery.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A fintech SaaS company needed an engaging video to explain their platform's value proposition. I took ownership of the full production pipeline — from working with the copywriter on the script to final render.",
        "The animation style used clean 2D vector motion with smooth easing, a professional voiceover mixed in Audition, and data-driven motion graphics to communicate complex financial concepts accessibly.",
      ],
      bullets: [
        "Produced a 2-minute animated explainer that boosted landing page conversions by 40%.",
        "Designed 60+ vector asset frames in Illustrator, then animated in After Effects.",
        "Mixed and mastered voiceover audio with background music in Audition.",
        "Delivered in 3 regional language versions with localized subtitles.",
        "Created a reusable animation template system for future campaign needs.",
      ],
    },
  },
  {
    id: "instagram-reels-pack",
    companyName: "Lifestyle Brand Reels Pack",
    type: "Client",
    category: ["Reels & Shorts", "Social Media", "Video Editing"],
    shortDescription:
      "Monthly social media content package — 30 Reels per month for a lifestyle brand, achieving 2M+ organic views.",
    websiteLink: "https://instagram.com/shivamgupta",
    techStack: ["Adobe Premiere Pro", "After Effects", "CapCut", "Photoshop"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/niya/logo.png",
    pagesInfoArr: [
      {
        title: "Reels Collection",
        description: "A selection of high-performing reels created for the brand.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Managed a 12-month retainer creating 30 Instagram Reels per month for a premium lifestyle brand. This involved developing a content calendar, shooting guides, and a consistent visual language.",
        "Every Reel was edited for maximum watch-time retention using trending audio, kinetic typography, and scroll-stopping hooks in the first 3 seconds.",
      ],
      bullets: [
        "Delivered 360+ short-form videos over a 12-month retainer.",
        "Generated 2M+ organic views across the brand's Instagram profile.",
        "Increased average Reel reach by 320% within the first 3 months.",
        "Developed a custom After Effects transition pack used across all content.",
        "Maintained brand tone consistency across diverse content themes and formats.",
      ],
    },
  },
  {
    id: "brand-identity-studio",
    companyName: "Brand Identity — Aura Studio",
    type: "Client",
    category: ["Graphic Design", "Brand Identity"],
    shortDescription:
      "Complete brand identity system for a wellness startup — logo, color palette, typography, brand guidelines, and social templates.",
    techStack: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-05-01"),
    companyLogoImg: "/projects/card/logo.png",
    pagesInfoArr: [
      {
        title: "Logo & Brand System",
        description: "Primary logo, variants, color palette, and typography system.",
        imgArr: ["/projects/card/card_2.webp", "/projects/card/card_3.webp"],
      },
      {
        title: "Brand Collateral",
        description: "Business cards, letterhead, social media templates, and packaging design.",
        imgArr: ["/projects/card/card_1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Designed a full visual identity for Aura Studio, a premium wellness and mindfulness startup. The brief called for a calm, elevated aesthetic that felt modern yet rooted in natural design principles.",
        "Deliverables included the primary logomark, icon variations, a complete typography system, color palette documentation, brand guidelines PDF, and 40+ social media templates in Figma.",
      ],
      bullets: [
        "Delivered a complete brand identity system within a 6-week timeline.",
        "Created logo in 5 variations for different use cases (print, digital, monochrome).",
        "Designed a 60-page brand guidelines document covering tone of voice and visual rules.",
        "Produced 40+ Figma-based social templates handed off to the internal marketing team.",
        "Won a client testimonial featured in my portfolio as a case study.",
      ],
    },
  },
  {
    id: "music-video-edit",
    companyName: "Music Video — 'Echoes'",
    type: "Personal",
    category: ["Video Editing", "Visual Effects", "Motion Graphics"],
    shortDescription:
      "Official music video edit for an independent artist — cinematic grade, VFX overlays, and synchronized cuts across 4-minute track.",
    websiteLink: "https://youtube.com/shivamgupta",
    techStack: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-09-15"),
    companyLogoImg: "/projects/builtdesign/logo.png",
    pagesInfoArr: [
      {
        title: "Music Video",
        description:
          "Full music video production for independent artist 'Echoes' — cinematic grade and VFX.",
        imgArr: ["/projects/builtdesign/landing_1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Edited the official music video for an independent artist's debut single 'Echoes'. The project required high creative autonomy — I worked directly with the artist to interpret the song's emotional arc through visual storytelling.",
        "The video featured composite VFX shots, atmospheric color grading, rhythmic cut synchronization, and custom motion graphic elements for the artist's visual brand.",
      ],
      bullets: [
        "Edited a 4-minute music video achieving 180K+ views on YouTube at launch.",
        "Designed and composited 12 VFX sequences using After Effects and Premiere.",
        "Applied a cinematic film emulation grade in DaVinci Resolve (Kodak 2383 print emulation).",
        "Synchronized 140+ cuts precisely to the beat using Premiere's Beat Detection.",
        "Created the artist's lyric video and teaser clips as supplementary assets.",
      ],
    },
  },
  {
    id: "3d-product-viz",
    companyName: "3D Product Visualization",
    type: "Client",
    category: ["3D Animation", "Motion Graphics", "Graphic Design"],
    shortDescription:
      "360° 3D product animation for a skincare brand's hero product — Cinema 4D modeling and After Effects compositing.",
    websiteLink: "https://vimeo.com/shivamgupta",
    techStack: ["Cinema 4D", "After Effects", "Photoshop", "Blender"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-04-15"),
    companyLogoImg: "/projects/builtdesign-blogs/logo.png",
    pagesInfoArr: [
      {
        title: "3D Product Renders",
        description: "360° product animation with reflective material and studio lighting.",
        imgArr: ["/projects/builtdesign-blogs/blog_2.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A premium skincare brand needed a photorealistic 3D animation of their hero product for a digital ad campaign. I modeled the bottle in Cinema 4D, applied PBR materials, and rendered under a studio lighting setup.",
        "The final deliverable included a 30-second 360° product spin, a 15-second stinger for paid ads, and still renders for display advertising.",
      ],
      bullets: [
        "Modeled and rendered a photorealistic 3D skincare bottle in Cinema 4D.",
        "Applied PBR materials with subsurface scattering and HDRI studio lighting.",
        "Delivered 4K 30-second hero animation and 15-second ad-cut variant.",
        "Composited 3D renders with live footage in After Effects for TV spot usage.",
        "Turned around from brief to final delivery in 6 weeks.",
      ],
    },
  },
  {
    id: "documentary-edit",
    companyName: "Short Documentary — 'Rooted'",
    type: "Personal",
    category: ["Video Editing", "Graphic Design"],
    shortDescription:
      "Award-shortlisted 18-minute documentary on sustainable farming communities — narrative edit, color grade, and sound design.",
    techStack: ["DaVinci Resolve", "Adobe Premiere Pro", "Audition", "After Effects"],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2022-12-01"),
    companyLogoImg: "/projects/superquotes/logo.png",
    pagesInfoArr: [
      {
        title: "Documentary Film",
        description:
          "Narrative edit and color grade for 'Rooted' — an 18-minute documentary.",
        imgArr: ["/projects/superquotes/app_2.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Edited 'Rooted', an 18-minute short documentary following sustainable farming communities in rural India. This was a passion project undertaken in collaboration with a photographer-turned-filmmaker.",
        "Responsibilities included narrative assembly edit from 12+ hours of raw footage, color grading in DaVinci Resolve, sound design in Audition, and subtitle localization in Hindi and English.",
      ],
      bullets: [
        "Assembled 18-minute film from 12+ hours of raw footage with documentary narrative structure.",
        "Applied warm, earthy color science grade in DaVinci Resolve to reflect the film's themes.",
        "Designed and mixed a layered soundscape with ambient audio, music, and voiceover.",
        "Shortlisted at 2023 Mumbai Documentary Film Showcase.",
        "Submitted and distributed across streaming platforms with localized subtitles.",
      ],
    },
  },
  {
    id: "ngo-campaign-video",
    companyName: "NGO Campaign — 'Clean Waters'",
    type: "Client",
    category: ["Video Editing", "Motion Graphics", "Social Media"],
    shortDescription:
      "Social media video campaign for an environmental NGO — 10-video series raising awareness on water conservation, reaching 5M+ impressions.",
    techStack: ["Adobe Premiere Pro", "After Effects", "Illustrator", "CapCut"],
    startDate: new Date("2022-04-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Campaign Videos",
        description:
          "10-video social media series for the Clean Waters environmental campaign.",
        imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Created a 10-video social media campaign for an environmental NGO focused on water conservation awareness. The project required infographic animations, emotional storytelling, and call-to-action overlays.",
        "The campaign was distributed across YouTube, Instagram, and Facebook, with each platform receiving a custom-formatted version of the video.",
      ],
      bullets: [
        "Produced a 10-video campaign series across YouTube, Instagram, and Facebook formats.",
        "Achieved 5M+ total campaign impressions and 1.2M video views.",
        "Designed 30+ custom data visualization animations for infographic sequences.",
        "Maintained brand consistency across all 10 videos using a shared motion template.",
        "Created subtitled versions in 4 regional Indian languages.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
