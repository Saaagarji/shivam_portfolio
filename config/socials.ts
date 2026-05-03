import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Instagram",
    username: "@shivamgupta",
    icon: Icons.instagram,
    link: "https://instagram.com/shivamgupta",
  },
  {
    name: "LinkedIn",
    username: "Shivam Gupta",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/shivamgupta",
  },
  {
    name: "Gmail",
    username: "shivam.gupta@gmail.com",
    icon: Icons.gmail,
    link: "mailto:shivam.gupta@gmail.com",
  },
];
