"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const staticLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/Caleb_Pickens_Resume.pdf", label: "Resume", external: true },
];

const linkClass = "font-medium text-text hover:text-primary transition-colors";

export default function Nav() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const projectsLabel = mounted && theme === "whimsical" ? "Interests" : "Projects";

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-accent transition-[border-color] duration-500">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary tracking-tight">
          Caleb Pickens
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 sm:gap-8">
            {staticLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/projects" className={linkClass}>
                {projectsLabel}
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
