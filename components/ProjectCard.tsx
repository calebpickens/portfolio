import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.liveUrl || project.githubUrl;

  return (
    <div className="bg-white rounded-xl border border-accent shadow-sm flex flex-col overflow-hidden">
      {project.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-accent text-text text-xs px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="flex flex-wrap gap-3 mt-auto pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-text text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
