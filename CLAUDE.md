# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Caleb Pickens (CS junior at UT Austin). Built with **Next.js 15 App Router + TypeScript + Tailwind CSS 3**. Static front-end only — no backend, no database, no authentication. Do not add server actions, API routes, or database integrations.

## Development

```sh
npm run dev        # start Turbopack dev server at http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
```

No environment variables required. The site is pure client-rendered static content.

## Architecture

### Pages (`app/`)
- `page.tsx` — Home: Hero + Highlights (top-2 card grid, pills, "View All" CTA). **Client component** — content swaps by theme.
- `about/page.tsx` — Two-column layout: text left, photo right (desktop); photo top, text below (mobile). **Client component** — heading and bio swap by theme.
- `projects/page.tsx` — Full card grid. **Client component** — renders all projects (Professional) or all personal interests (Whimsical).
- `layout.tsx` — Root layout: wraps everything in `<ThemeProvider>`, renders `<Nav />`, `max-w-4xl` container. Has `suppressHydrationWarning` on `<html>`.

### Key Files
- `data/projects.ts` — Source of truth for engineering project cards (Professional mode).
- `data/personal.ts` — Source of truth for personal interest cards (Whimsical mode): Music Production, Film Logging, Reading & Habit Tracking.
- `components/ProjectCard.tsx` — Card for engineering projects; conditionally renders image, tech tags, Live Demo / GitHub buttons.
- `components/PersonalCard.tsx` — Card for personal interests; renders emoji, description, celadon tags, Visit link.
- `components/Nav.tsx` — **Client component.** Sticky nav; reads theme to rename "Projects" → "Interests" in Whimsical mode. Resume link uses `external: true` to render `<a target="_blank">`.
- `components/ThemeProvider.tsx` — Wraps `next-themes` `<ThemeProvider>` with `attribute="data-theme"` and `defaultTheme="professional"`.
- `components/ThemeToggle.tsx` — **Client component.** ✨/👔 toggle button in the nav; fires a radial-gradient screen-wash flash on switch.
- `app/globals.css` — Defines CSS custom properties on `html` for both themes; `body` gets a 0.6s color transition.
- `tailwind.config.ts` — All color tokens map to `var(--color-*)` so Tailwind classes automatically reflect the active theme.
- `next.config.ts` — `remotePatterns: [{ protocol: "https", hostname: "**" }]` allows `next/image` from any HTTPS host.
- `public/Caleb_Pickens_Resume.pdf` — Resume served as a static file; linked from Nav and Hero CTA.

---

## Theme Architecture

The site has two modes: **Professional** (default) and **Whimsical**. `next-themes` manages state by setting `data-theme="whimsical"` on the `<html>` element. The default (professional) has no attribute or `data-theme="professional"`.

### How colors work

All Tailwind color utility classes (`bg-background`, `text-primary`, `border-accent`, etc.) resolve to CSS custom properties defined in `globals.css`. When `data-theme` changes, the variables change, and every element using those utilities updates automatically.

```
Tailwind class      → CSS property          → CSS variable
bg-background       → background-color      → var(--color-background)
text-primary        → color                 → var(--color-primary)
border-accent       → border-color          → var(--color-accent)
```

### Professional palette (default)

| Token         | Hex       | Usage                        |
|---------------|-----------|------------------------------|
| `text`        | `#01200F` | Body text                    |
| `background`  | `#F1E7ED` | Page background (dusty rose) |
| `primary`     | `#0D2766` | Buttons, links, nav brand    |
| `secondary`   | `#1A5F7F` | Muted/secondary text         |
| `accent`      | `#C4CCD5` | Borders, tag backgrounds     |
| `wisteria`    | `#c490d1` | Available; not theme-specific|
| `celadon`     | `#94e8b4` | Available; not theme-specific|

### Whimsical palette (`data-theme="whimsical"`)

| Token         | Hex       | Usage                        |
|---------------|-----------|------------------------------|
| `text`        | `#0f172a` | Body text (Prussian Blue)    |
| `background`  | `#7dd3fc` | Page background (Frozen Lake)|
| `primary`     | `#3066be` | Buttons, links (Smart Blue)  |
| `secondary`   | `#1e40af` | Muted/secondary text         |
| `accent`      | `#94e8b4` | Borders, tags (Celadon)      |
| `wisteria`    | `#c490d1` | Available accent (Wisteria)  |
| `celadon`     | `#94e8b4` | Tag backgrounds on PersonalCard |

> **Never hardcode palette hex values in components.** Always use the Tailwind token (`bg-primary`, `text-secondary`, etc.) so both themes work automatically.

---

## Dynamic Content & Routing Rules

- **Home page** (`app/page.tsx`): Hero tagline, highlights section heading ("Top Projects" / "What I'm Into"), card grid (`.slice(0, 2)` of `projects` or `personalInterests`), pills label ("Skills" / "Current Obsessions"), and "View All" CTA text all switch based on `isWhimsical`.
- **Projects page** (`app/projects/page.tsx`): Page title ("Projects" / "Interests"), subtitle, and full card grid swap between `projects.map(ProjectCard)` and `personalInterests.map(PersonalCard)`.
- **About page** (`app/about/page.tsx`): H1 heading and all three bio paragraphs swap. Photo stays the same.
- **Nav** (`components/Nav.tsx`): The `/projects` route href never changes, but its display label reads "Projects" (Professional) or "Interests" (Whimsical).

All theme-reading pages/components are Client Components (`"use client"`). They use the `mounted` guard pattern to avoid hydration mismatches:

```ts
const { theme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
const isWhimsical = mounted && theme === "whimsical";
```

---

## Coding Standards

- **Images:** Always use `next/image` (`<Image>`), never `<img>`. Set `fill` + `sizes` for responsive images.
- **Hydration:** `<html>` in `layout.tsx` must keep `suppressHydrationWarning` — required by `next-themes`.
- **Mobile responsiveness:** All new components must work at 360px width. Use `sm:` breakpoints for two-column grids (`grid sm:grid-cols-2`). Nav text that would overflow on mobile uses `hidden sm:inline`.
- **No hardcoded colors:** Use Tailwind tokens only. Never write `style={{ color: "#0D2766" }}` or `className="text-[#0D2766]"`.
- **No comments on obvious code.** Only comment when a non-obvious constraint or workaround is present.
- **Client components:** Only add `"use client"` when the component needs hooks or browser APIs. Prefer server components for static markup.

### Adding a Project
Edit `data/projects.ts`. All fields except `id`, `title`, `description`, and `technologies` are optional:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "...",
  technologies: ["React", "Node.js"],
  liveUrl: "https://myproject.calebpickens.com",   // optional
  githubUrl: "https://github.com/calebpickens/...", // optional
  imageUrl: "https://...",                          // optional — any HTTPS URL
}
```

### Adding a Personal Interest
Edit `data/personal.ts`. All fields except `id`, `title`, `description`, `tags`, and `emoji` are optional:

```ts
{
  id: "my-interest",
  title: "My Interest",
  description: "...",
  tags: ["Tag1", "Tag2"],
  emoji: "🎸",
  url: "https://...",  // optional
}
```

### Layout Pattern (Responsive Two-Column)
The About page uses `flex flex-col-reverse` on mobile (image rises visually to top) and `md:grid md:grid-cols-2` on desktop. This avoids `order-` utilities while keeping DOM order semantic.

---

## Git Automation

When I say "sync changes", "push changes", or "auto-push":

1. Run `git add .` to stage all modifications.
2. Run `git diff --staged` to analyze exactly what was changed.
3. Generate a concise, professional commit message summarizing the diff.
4. Execute `git commit -m "<your_generated_message>"`.
5. Execute `git push` to upload to the remote repository.
