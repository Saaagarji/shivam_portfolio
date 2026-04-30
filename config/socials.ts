import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@shivamgupta",
    icon: Icons.gitHub,
    link: "https://github.com/shivamgupta",
  },
  {
    name: "LinkedIn",
    username: "Naman Barkiya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/shivamgupta",
  },
  {
    name: "Twitter",
    username: "@shivamgupta",
    icon: Icons.twitter,
    link: "https://twitter.com/shivamgupta",
  },
  {
    name: "Gmail",
    username: "shivam.barkiya02",
    icon: Icons.gmail,
    link: "mailto:shivam.barkiya02@gmail.com",
  },
];
