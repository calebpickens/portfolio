import type { PersonalInterest } from "@/data/personal";

export default function PersonalCard({
  interest,
}: {
  interest: PersonalInterest;
}) {
  return (
    <div className="bg-white rounded-xl border border-accent shadow-sm flex flex-col overflow-hidden transition-[border-color] duration-500">
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start gap-3">
          <span className="text-3xl leading-none mt-0.5" aria-hidden="true">
            {interest.emoji}
          </span>
          <div>
            <h3 className="text-lg font-semibold mb-1">{interest.title}</h3>
            <p className="text-sm text-secondary leading-relaxed">
              {interest.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {interest.tags.map((tag) => (
            <span
              key={tag}
              className="bg-celadon text-text text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {interest.url && (
          <div className="mt-auto pt-2">
            <a
              href={interest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Visit ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
