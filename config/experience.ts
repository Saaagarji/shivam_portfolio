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
    id: "lead-independent-creative",
    position: "Creative Consultant & Motion Graphics Artist",
    company: "Pixominia",
    location: "Indore, India",
    startDate: new Date("2023-01-01"),
    endDate: "Present",
    description: [
      "Specialized in advanced Adobe After Effects workflows including character animation, motion design systems, compositing, visual effects, and branded content production.",
      "Lead end-to-end post-production and creative pipelines, delivering high-end motion graphics, commercial content, and brand films for global clients.",
      "Design custom character animations, explainer videos, and visual assets using Adobe After Effects to elevate brand identities and marketing campaigns.",
      "Produce cinematic video edits, compositing, and visual storytelling assets across multi-platform digital channels.",
      "Manage complete post-production workflows, coordinating directly with brands and agency partners from brief and concepts to final delivery."
    ],
    achievements: [
      "Successfully delivered numerous commercial video and animation projects for international brands and creative agencies.",
      "Developed custom character animations and explainer videos that elevated social media campaign aesthetics and viewer engagement.",
      "Established optimized post-production templates and asset pipelines, standardizing project handoffs and accelerating delivery times.",
      "Managed complete post-production workflows incorporating editing, graphics, sound design, and color grading."
    ],
    skills: [
      "After Effects",
      "Adobe Premiere Pro",
      "Photoshop",
      "Illustrator",
      "Audition",
    ],
    logo: "/experience/pixominia.png"
  },
  {
    id: "craft-senior-designer",
    position: "Senior Motion Graphics Artist & Communication Designer",
    company: "Communication Craft",
    location: "Ahmedabad, India",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-12-31"),
    description: [
      "Produced and edited engaging vertical video content and custom motion graphics for Snapchat and digital-first campaigns.",
      "Designed motion graphics, typography, and transition systems aligned with brand identity guidelines.",
      "Collaborated with cross-functional creative teams on communication design strategies and marketing assets.",
      "Animated campaign assets to improve audience interaction and maintain visual consistency across channels."
    ],
    achievements: [
      "Created a unified library of motion graphics templates and assets that simplified internal production workflows.",
      "Designed and animated serial content for Snapchat campaigns that maintained high audience retention rates.",
      "Collaborated on communication design assets that strengthened brand presence and campaign visibility across digital channels."
    ],
    skills: [
      "After Effects",
      "Adobe Premiere Pro",
      "Photoshop",
      "Illustrator",
      "Figma",
      "Lottie"
    ],
    logo: "/experience/communication-craft.png"
  },
  {
    id: "deadline-senior-editor",
    position: "Senior Designer & Video Editor",
    company: "Deadline Post Production",
    location: "Indore, India",
    startDate: new Date("2018-01-01"),
    endDate: new Date("2020-12-31"),
    description: [
      "Supervised editing and post-production phases for commercial video projects and promotional brand campaigns.",
      "Designed motion graphics, title sequences, 2D animations, and communication design assets.",
      "Collaborated with directors and creative leads to refine video pacing, visual quality, and overall post-production delivery.",
      "Implemented workflows to optimize media management, transcription integration, and render queues."
    ],
    achievements: [
      "Directed editing and post-production workflows for multiple commercial marketing campaigns.",
      "Refined post-production pipelines to ensure faster delivery and higher output quality across active projects.",
      "Mentored junior designers and editors on technical workflows in After Effects and Premiere Pro."
    ],
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "Photoshop",
      "Illustrator",
      "Audition",
      "DaVinci Resolve"
    ],
    logo: "/experience/deadline.png"
  },
  {
    id: "love-wedding-editor",
    position: "Video Editor",
    company: "The Wedding Love",
    location: "Indore, India",
    startDate: new Date("2017-06-01"),
    endDate: new Date("2018-12-31"),
    description: [
      "Edited cinematic, story-driven wedding films, ensuring high-quality storytelling and emotional resonance.",
      "Managed multicam synchronization, color correction, audio mixing, and general post-production tasks.",
      "Communicated with clients to integrate feedback and deliver high-standard wedding films and trailers."
    ],
    achievements: [
      "Completed and delivered high-quality cinematic wedding films and promotional teasers.",
      "Implemented advanced color grading techniques to achieve consistent, premium cinematic tones.",
      "Maintained high client satisfaction ratings through clear communication and timely delivery."
    ],
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "Lightroom",
      "Audition",
      "DaVinci Resolve"
    ],
    logo: "/experience/love.jpg"
  },
  {
    id: "match-box-intern",
    position: "Graphics & Video Intern",
    company: "Match Box",
    location: "India",
    startDate: new Date("2016-06-01"),
    endDate: new Date("2017-05-31"),
    description: [
      "Assisted senior creatives with graphic design layouts, motion design assets, and video edits.",
      "Prepared storyboard sketches, mood boards, and social media graphics for ongoing client pitches.",
      "Organized footage libraries, project files, and initial rough cuts for editing pipelines."
    ],
    achievements: [
      "Supported the delivery of rapid-turnaround creative assets for digital ad campaigns.",
      "Developed proficiency in industry-standard tools including Premiere Pro, After Effects, Photoshop, and Illustrator."
    ],
    skills: [
      "Adobe Premiere Pro",
      "Photoshop",
      "Illustrator",
      "After Effects"
    ],
    logo: "/experience/mb-logo.png"
  }
];
