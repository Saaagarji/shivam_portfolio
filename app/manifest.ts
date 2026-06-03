import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shivam Gupta | Motion Designer & Video Editor",
    short_name: "Shivam Gupta",
    description:
      "Shivam Gupta — Creative Video Editor & Motion Graphics Artist. Crafting cinematic visuals and brand identities.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "video editing",
      "motion graphics",
      "creative",
      "design",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
