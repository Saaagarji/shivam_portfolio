import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my creative portfolio.",
    metadata: {
      title: "Home",
      description: "Shivam Gupta's creative portfolio — Motion Designer & Video Editor.",
    },
  },
  skills: {
    title: "Tools & Skills",
    description: "The creative tools and skills that define my craft.",
    metadata: {
      title: "Tools & Skills",
      description:
        "Shivam Gupta's creative toolkit — Adobe Suite, After Effects, and more.",
    },
  },
  projects: {
    title: "Work",
    description: "A selection of my best creative work.",
    metadata: {
      title: "Work",
      description: "Shivam Gupta's portfolio — motion graphics, video editing, and design projects.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's create something extraordinary together.",
    metadata: {
      title: "Contact",
      description: "Get in touch with Shivam Gupta for freelance work and collaborations.",
    },
  },
  services: {
    title: "Services",
    description: "Creative services tailored to your brand.",
    metadata: {
      title: "Services",
      description: "Shivam Gupta's creative services — video editing, motion graphics, and design.",
    },
  },
  resume: {
    title: "Resume",
    description: "Shivam Gupta's creative resume.",
    metadata: {
      title: "Resume",
      description: "Shivam Gupta's resume — Motion Designer & Video Editor.",
    },
  },
  experience: {
    title: "Experience",
    description: "My professional creative journey.",
    metadata: {
      title: "Experience",
      description: "Shivam Gupta's professional journey as a motion designer and video editor.",
    },
  },
  about: {
    title: "About Me",
    description: "The story behind the craft.",
    metadata: {
      title: "About",
      description: "Learn more about Shivam Gupta — designer, storyteller, and visual creative.",
    },
  },
  blogs: {
    title: "Creative Notes",
    description: "Insights on design, motion, and visual storytelling.",
    metadata: {
      title: "Creative Notes",
      description:
        "Shivam Gupta's creative blog — insights on design, motion graphics, and visual storytelling.",
    },
  },
  contributions: {
    title: "Creative Platforms",
    description: "Explore my work across video, design, and creative platforms.",
    metadata: {
      title: "Creative Platforms",
      description:
        "Find Shivam Gupta's creative work across Vimeo, Instagram, and YouTube.",
    },
  },
};
