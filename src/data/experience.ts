export interface Experience {
  dates: string;
  title: string;
  organization: string;
  description: string[];
  tech?: string[];
}

export const experiences: Experience[] = [
  {
    dates: "2025 — Present",
    title: "Intern Software Developer",
    organization: "Resolution8 (Accountancy Performance Tools)",
    description: [
      "Designed and implemented a Reference Data Editor web application to manage invoicing targets, status mappings, refresh schedules, and staff information.",
      "Built front-end pages using ASP.NET Razor Pages and C#, integrating with a PostgreSQL database.",
      "Collaborated with the client to refine requirements and iteratively improve UX and data workflows.",
    ],
    tech: ["C#", ".NET", "ASP.NET", "Razor Pages", "PostgreSQL", "Entity Framework"],
  },
  {
    dates: "2024 — Present",
    title: "Master of Information Technology Student",
    organization: "University of Waikato",
    description: [
      "Coursework in web development, databases, cloud technologies, and software engineering.",
      "Built multiple course projects including full-stack web apps and data visualisation dashboards.",
    ],
    tech: ["React", "TypeScript", "PostgreSQL", "Power BI", "Cloud Technologies"],
  },
];

