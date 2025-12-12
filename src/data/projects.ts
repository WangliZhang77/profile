export interface Project {
  title: string;
  role?: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    external?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Reference Data Editor",
    role: "Intern project for Resolution8",
    description: "An internal web tool for managing invoicing targets, status mappings, refresh schedules, and staff information for an accountancy performance system.",
    tech: ["C#", ".NET", "Razor Pages", "PostgreSQL", "Entity Framework", "Power BI"],
    links: {
      external: "#",
    },
  },
  {
    title: "FreshFruit Online Store",
    description: "A full-stack demo e-commerce site for a virtual fruit shop, featuring product listings, shopping cart, coupon system, and order management dashboard.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com/wanglizhang/freshfruit",
    },
  },
  {
    title: "Audiobookshelf Volume Control Enhancement",
    description: "A contribution to an open-source audiobook platform to improve the volume control UI with smooth fade-in/fade-out, mute/unmute behavior, long-press fade-out, and mode labels.",
    tech: ["Vue", "TypeScript", "UX"],
    links: {
      github: "#",
    },
  },
  {
    title: "Data Visualisation Dashboards",
    description: "Several academic dashboards using Power BI and web charts to visualise economic and technical data.",
    tech: ["Power BI", "SQL", "Data Visualisation"],
  },
];

