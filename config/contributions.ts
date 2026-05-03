export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Vimeo Portfolio",
    contibutionDescription:
      "Curated collection of client brand films, explainer videos, and motion graphics projects available on Vimeo.",
    repoOwner: "shivamgupta",
    link: "https://vimeo.com/shivamgupta",
  },
  {
    repo: "Instagram Reels",
    contibutionDescription:
      "Instagram portfolio of short-form social content, reels, and motion graphics with 500K+ total reach.",
    repoOwner: "shivamgupta",
    link: "https://instagram.com/shivamgupta",
  },
  {
    repo: "YouTube Channel",
    contibutionDescription:
      "Long-form video edits, music videos, and documentary projects posted publicly on YouTube.",
    repoOwner: "shivamgupta",
    link: "https://youtube.com/shivamgupta",
  },
  {
    repo: "Fiverr Store",
    contibutionDescription:
      "Top-rated Fiverr seller offering video editing, motion graphics, and brand design services — 5.0 star rating.",
    repoOwner: "shivamgupta",
    link: "https://fiverr.com/shivamgupta",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
