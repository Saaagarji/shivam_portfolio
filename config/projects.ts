import { ValidCategory, ValidSkills } from "./constants";

export interface ProjectMedia {
  type: "image" | "video";
  url: string;
  title?: string;
  description?: string;
}

export interface ProjectInterface {
  id: string;
  category: ValidCategory[];
  videoUrl?: string; // Autoplay preview (.mp4) or embed link (base64 or plain path)
  softwareUsed: ValidSkills[];
  aspectRatio?: "video" | "square" | "portrait" | "reels";
  featured?: boolean;
  thumbnail?: string; // Video thumbnail image path
}

export const Projects: ProjectInterface[] = [
  {
    id: "udaipur",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/udaipur.mp4",
    thumbnail: "/projects/thumbnails/udaipur.png",
    featured: true,
    aspectRatio: "reels",
  },
  {
    id: "brand-reel-luxe",
    category: ["Video Editing", "Brand Films", "Motion Graphics"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Lightroom"],
    videoUrl: "L3Byb2plY3RzL2ZpbmFsLXZpZGVvLXdlZGRpbmcubXA0", // Decodes to: /projects/final-video-wedding.mp4 (obfuscated)
    aspectRatio: "video",
    thumbnail: "/projects/thumbnails/final-video-wedding.png",
  },
  {
    id: "motion-explainer",
    category: ["Motion Graphics", "Video Editing"],
    softwareUsed: ["After Effects", "Illustrator", "Audition", "Adobe Premiere Pro"],
    videoUrl: "/projects/a_shridhar_kaveri_soham_vivanta.mp4",
    aspectRatio: "video",
    thumbnail: "/projects/thumbnails/amdavad.png",
    featured: true
  },
  {
    id: "brand-identity-studio",
    category: ["Brand Identity"],
    softwareUsed: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    videoUrl: "/projects/credit-card-video.mp4",
    aspectRatio: "reels",
    thumbnail: "/projects/thumbnails/credit-card-video.png"
  },
  {
    id: "IOTCASA-2",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/IOTCASA-2.mp4",
    thumbnail: "/projects/thumbnails/IOTCASA-2.png",
    aspectRatio: "reels"
  },
  {
    id: "instagram-reels-pack",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/book-your-move-online.mp4",
    thumbnail: "/projects/thumbnails/book-your-move-online.png",
    aspectRatio: "video"
  },
  {
    id: "enterprise-solution-explainer-video",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/enterprise-solution-explainer-video.mp4",
    thumbnail: "/projects/thumbnails/enterprise-solution-explainer-video.png",
    aspectRatio: "video",
    featured: true
  },
  {
    id: "IOTCASA",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/IOTCASA.mp4",
    thumbnail: "/projects/thumbnails/IOTCASA.png",
    aspectRatio: "video"
  },

  {
    id: "human-interest",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/human-interest.mp4",
    thumbnail: "/projects/thumbnails/human-interest.png",
    aspectRatio: "reels"
  },
  {
    id: "marwadi-university",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/marwadi-university.mp4",
    thumbnail: "/projects/thumbnails/marwadi-university.png",
    aspectRatio: "video"
  },
  {
    id: "mehendi-teaser",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/mehendi-teaser.mp4",
    thumbnail: "/projects/thumbnails/mehendi-teaser.png",
    aspectRatio: "video"
  },
  {
    id: "live-life-safe",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/live-life-safe.mp4",
    thumbnail: "/projects/thumbnails/live-life-safe.png",
    aspectRatio: "video"
  },
  {
    id: "bhai-dooj-celebrates",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/bhai-dooj-celebrates.mp4",
    thumbnail: "/projects/thumbnails/bhai-dooj-celebrates.png",
    aspectRatio: "reels"
  },
  {
    id: "corny-crunchy",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/corny-crunchy.mp4",
    thumbnail: "/projects/thumbnails/corny-crunchy.png",
    aspectRatio: "reels",
    featured: true
  },
  {
    id: "education",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/education.mp4",
    thumbnail: "/projects/thumbnails/education.png",
    aspectRatio: "reels"
  },
  {
    id: "rate-asset-global",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/rate-asset-global.mp4",
    thumbnail: "/projects/thumbnails/rate-asset-global.png",
    aspectRatio: "video",
    featured: true
  },
  {
    id: "tata-play-fiber",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/tata-play-fiber.mp4",
    thumbnail: "/projects/thumbnails/tata-play-fiber.png",
    aspectRatio: "reels"
  },
  {
    id: "foood-ai",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/foood-ai.mp4",
    thumbnail: "/projects/thumbnails/foood-ai.png",
    aspectRatio: "reels"
  },
  {
    id: "tata-playfiber",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/tata-playfiber.mp4",
    thumbnail: "/projects/thumbnails/tata-playfiber.png",
    aspectRatio: "reels"
  },
  {
    id: "shantis v-2",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/shantis v-2.mp4",
    thumbnail: "/projects/thumbnails/shantis v-2.png",
    aspectRatio: "square"
  },
  {
    id: "men's-lab",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/men's-lab.mp4",
    thumbnail: "/projects/thumbnails/men's-lab.png",
    aspectRatio: "portrait"
  },
  {
    id: "kidney-stone",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/kidney-stone.mp4",
    thumbnail: "/projects/thumbnails/kidney-stone.png",
    aspectRatio: "square"
  },
  {
    id: "Flh2",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/Flh2.mp4",
    thumbnail: "/projects/thumbnails/Flh2.png",
    aspectRatio: "square"
  },
  {
    id: "real-bites-burger",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/real-bites-burger.mp4",
    thumbnail: "/projects/thumbnails/real-bites-burger.png",
    aspectRatio: "square",
    featured: true
  },
  {
    id: "3-michelle-morgan",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/3-michelle-morgan.mp4",
    thumbnail: "/projects/thumbnails/3-michelle-morgan.png",
    aspectRatio: "reels"
  },
  {
    id: "kasol-trip",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/kasol-trip.mp4",
    thumbnail: "/projects/thumbnails/kasol-trip.png",
    aspectRatio: "reels"
  },
  {
    id: "dreamnest-properties",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/dreamnest-properties.mp4",
    thumbnail: "/projects/thumbnails/dreamnest-properties.png",
    aspectRatio: "reels",
    featured: true
  },
  {
    id: "k-corner",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/k-corner.mp4",
    thumbnail: "/projects/thumbnails/k-corner.png",
    aspectRatio: "reels"
  },
  {
    id: "social-nazaria",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/social-nazaria.mp4",
    thumbnail: "/projects/thumbnails/social-nazaria.png",
    aspectRatio: "reels"
  },
  {
    id: "korma-sutra-pub",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/korma-sutra-pub.mp4",
    thumbnail: "/projects/thumbnails/korma-sutra-pub.png",
    aspectRatio: "reels"
  },
  {
    id: "korma-sutra-food",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/korma-sutra-food.mp4",
    thumbnail: "/projects/thumbnails/korma-sutra-food.png",
    aspectRatio: "reels"
  },
  {
    id: "korma-sutra-rest",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/korma-sutra-rest.mp4",
    thumbnail: "/projects/thumbnails/korma-sutra-rest.png",
    aspectRatio: "reels",
  },
  {
    id: "truhth",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/truhth.mp4",
    thumbnail: "/projects/thumbnails/truhth.png",
    aspectRatio: "reels"
  },
  {
    id: "trading",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/trading.mp4",
    thumbnail: "/projects/thumbnails/trading.png",
    aspectRatio: "video",
  },
  {
    id: "Dumoush",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/Dumoush.mp4",
    thumbnail: "/projects/thumbnails/Dumoush.png",
    aspectRatio: "video"
  },
  {
    id: "carat-craft",
    category: ["Video Editing", "Social Media"],
    softwareUsed: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    videoUrl: "/projects/carat-craft.mp4",
    thumbnail: "/projects/thumbnails/carat-craft.png",
    aspectRatio: "video"
  },
];

export const featuredProjects = Projects.filter(
  (project) => project.featured === true
);
