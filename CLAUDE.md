# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Caleb Pickens (CS junior at UT Austin). Built with **Next.js 15 App Router + TypeScript + Tailwind CSS 3**. Static front-end only — no backend, no database, no authentication.

## Development

```sh
npm run dev        # start Turbopack dev server at http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
```

No environment variables required. The site is pure client-rendered static content.

## Architecture

### Pages (`app/`)
- `page.tsx` — Home: Hero (name, tagline, Resume CTA, GitHub/LinkedIn icons) + Highlights (Top Projects grid, Skills pills)
- `about/page.tsx` — Two-column layout: text left, photo right (desktop); photo top, text below (mobile)
- `projects/page.tsx` — Full project grid, maps all entries from `data/projects.ts`
- `layout.tsx` — Root layout: imports `globals.css`, renders `<Nav />`, wraps content in `max-w-4xl` container

### Key Files
- `data/projects.ts` — **Single source of truth for all project data.** Add/edit projects here; both Home and Projects pages pull from this array.
- `components/ProjectCard.tsx` — Reusable card; conditionally renders image, tech tags, and Live Demo / GitHub buttons based on which optional fields are present.
- `components/Nav.tsx` — Sticky nav. Uses `external: true` flag on a link entry to render `<a target="_blank">` instead of Next.js `<Link>` (used for the Resume PDF).
- `app/globals.css` — `@layer base` applies `bg-background text-text` to `<body>`.
- `tailwind.config.ts` — Custom color tokens: `text` `#01200F`, `background` `#F1E7ED`, `primary` `#0D2766`, `secondary` `#1A5F7F`, `accent` `#C4CCD5`.
- `next.config.ts` — `remotePatterns: [{ protocol: "https", hostname: "**" }]` allows `next/image` to load from any HTTPS host.
- `public/Caleb_Pickens_Resume.pdf` — Resume served as a static file; linked from Nav and Hero CTA with `target="_blank"`.

### Adding a Project
Edit `data/projects.ts`. All fields except `id`, `title`, `description`, and `technologies` are optional:

```ts
{
  id: "my-project",           // unique slug
  title: "My Project",
  description: "...",
  technologies: ["React", "Node.js"],
  liveUrl: "https://myproject.calebpickens.com",  // optional
  githubUrl: "https://github.com/calebpickens/...", // optional
  imageUrl: "https://...",    // optional — any HTTPS image URL
}
```

### Layout Pattern (Responsive Two-Column)
The About page uses `flex flex-col-reverse` on mobile (image rises visually to top) and `md:grid md:grid-cols-2` on desktop (DOM order restores: text left, image right). This avoids `order-` utilities while keeping DOM order semantic.

## Git Automation

When I say "sync changes", "push changes", or "auto-push":

1. Run `git add .` to stage all modifications.
2. Run `git diff --staged` to analyze exactly what was changed.
3. Generate a concise, professional commit message summarizing the diff.
4. Execute `git commit -m "<your_generated_message>"`.
5. Execute `git push` to upload to the remote repository.
