export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "gamified-study-planner",
    title: "Gamified Study Planner",
    description:
      "A productivity app that turns study sessions into quests, complete with XP, streaks, and achievement badges to keep students motivated and on track.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://studyplanner.calebpickens.com",
    githubUrl: "https://github.com/calebpickens/gamified-study-planner",
  },
  {
    id: "acoustic-journal",
    title: "Acoustic Journal",
    description:
      "A journaling app with audio recording and playback, letting users attach voice notes and mood tags to written entries.",
    technologies: ["React", "Node.js", "Web Audio API", "MongoDB"],
    // private school project — no public links
  },
];
