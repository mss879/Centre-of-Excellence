export const site = {
  name: "Centre of Excellence",
  institution: "Ananda College",
  fullName: "Centre of Excellence at Ananda College",
  url: "https://coe.anandacollege.edu.lk",
  location: "Colombo, Sri Lanka",
};

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about", description: "Why the Centre exists" },
  { label: "Learning", href: "/learning", description: "How students learn" },
  { label: "Centres", href: "/centres", description: "Ten connected environments" },
  { label: "Courses", href: "/courses", description: "Programmes and pathways" },
  { label: "Impact", href: "/impact", description: "What learning should change" },
  {
    label: "Standards & Partnerships",
    href: "/standards-and-partnerships",
    description: "Credibility, made visible",
  },
  { label: "News & Ideas", href: "/news-and-ideas", description: "Follow the work" },
  { label: "Support", href: "/support", description: "Help create opportunity" },
  { label: "Contact", href: "/contact", description: "Start a conversation" },
];

export const footerNav = {
  explore: [
    { label: "About the Centre", href: "/about" },
    { label: "Learning approach", href: "/learning" },
    { label: "The ten centres", href: "/centres" },
    { label: "Impact", href: "/impact" },
    { label: "News & Ideas", href: "/news-and-ideas" },
  ],
  programmes: [
    { label: "All courses", href: "/courses" },
    { label: "Artificial Intelligence", href: "/courses/artificial-intelligence" },
    { label: "STEAM, Coding & Making", href: "/courses/steam-coding-making" },
    { label: "Media & Communication", href: "/courses/media-communication" },
    { label: "Fine & Digital Arts", href: "/courses/fine-digital-arts" },
    { label: "Good Ambassadors", href: "/courses/good-ambassadors-programme" },
  ],
  connect: [
    { label: "Support the Centre", href: "/support" },
    { label: "Standards & Partnerships", href: "/standards-and-partnerships" },
    { label: "Contact & Visit", href: "/contact" },
  ],
};
