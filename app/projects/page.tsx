import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-gray-400 mb-10">Things I&apos;ve built.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-gray-800 bg-gray-900 p-6 flex flex-col gap-4"
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto pt-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Demo ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
