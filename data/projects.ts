export interface Project {
  title: string;
  description: string;
  /** Update liveDemo when the project is deployed — each project lives on its own subdomain */
  liveDemo: string | null;
  repo: string | null;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of what this project does.",
    liveDemo: null, // e.g. "https://project1.calebpickens.com"
    repo: null,     // e.g. "https://github.com/calebpickens/project1"
    tags: ["React", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Another project description.",
    liveDemo: null,
    repo: null,
    tags: ["Next.js", "Tailwind CSS"],
  },
];
