export interface PersonalInterest {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  emoji: string;
}

export const personalInterests: PersonalInterest[] = [
  {
    id: "music-production",
    title: "Music Production",
    description:
      "I produce ambient, electronic, and experimental music as Gibbous Phase — layering synths, field recordings, and lo-fi textures into something worth losing yourself in.",
    tags: ["Ableton Live", "Synthesis", "Ambient", "Electronic"],
    url: "https://gibbousphase.calebpickens.dev",
    emoji: "🎛️",
  },
  {
    id: "letterboxd",
    title: "Film Logging",
    description:
      "Obsessive film watcher. I log everything I watch on Letterboxd and write short reviews — from slow-burn arthouse to mainstream blockbusters.",
    tags: ["Film", "Reviews", "Letterboxd"],
    url: "https://letterboxd.com/calebpickens",
    emoji: "🎬",
  },
  {
    id: "reading-habits",
    title: "Reading & Habit Tracking",
    description:
      "I track my reading on Goodreads and log daily habits — currently working through philosophy, systems thinking, and the occasional thriller.",
    tags: ["Goodreads", "Books", "Routines"],
    url: "https://goodreads.com/calebpickens",
    emoji: "📚",
  },
];
