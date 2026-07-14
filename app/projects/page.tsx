"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { personalInterests } from "@/data/personal";
import ProjectCard from "@/components/ProjectCard";
import PersonalCard from "@/components/PersonalCard";

export default function Projects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isWhimsical = mounted && theme === "whimsical";

  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-2">
        {isWhimsical ? "Interests" : "Projects"}
      </h1>
      <p className="text-secondary mb-10">
        {isWhimsical ? "Beyond the code." : "Things I’ve built."}
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {isWhimsical
          ? personalInterests.map((interest) => (
              <PersonalCard key={interest.id} interest={interest} />
            ))
          : projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>
    </div>
  );
}
