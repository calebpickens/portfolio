import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-secondary mb-10">Things I&apos;ve built.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
