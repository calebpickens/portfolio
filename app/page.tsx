"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { personalInterests } from "@/data/personal";
import ProjectCard from "@/components/ProjectCard";
import PersonalCard from "@/components/PersonalCard";
import SocialLinks from "@/components/SocialLinks";

const skills = ["Python", "C", "Java", "Next.js", "React", "TypeScript", "Teaching", "Git", "Linux"];
const hobbies = ["Music Production", "Movies", "Books", "Minecraft", "Running", "Volleyball"];

export default function Home() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isWhimsical = mounted && theme === "whimsical";

    return (
        <>
            {/* ── Hero ── */}
            <section className="pt-20 pb-24">
                <h1 className="text-6xl font-bold tracking-tight mb-5">
                    Caleb Pickens.
                </h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mb-10">
                    {isWhimsical
                        ? "Amateur music producer, cinephile, and reader."
                        : "Computer Science student at UT Austin, full-stack developer, and educator."}
                </p>
                <div className="flex items-center gap-5">
                    <a
                        href="/Caleb_Pickens_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                        View Resume
                    </a>
                    <SocialLinks />
                </div>
            </section>

            {/* ── Highlights ── */}
            <section className="pb-24 space-y-16">
                <div>
                    <h2 className="text-2xl font-bold mb-6">
                        {isWhimsical ? "What I'm Into" : "Featured Projects"}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {isWhimsical
                            ? personalInterests
                                  .slice(0, 2)
                                  .map((interest) => (
                                      <PersonalCard
                                          key={interest.id}
                                          interest={interest}
                                      />
                                  ))
                            : projects
                                  .slice(0, 2)
                                  .map((project) => (
                                      <ProjectCard
                                          key={project.id}
                                          project={project}
                                      />
                                  ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/projects"
                            className="border border-primary text-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                            {isWhimsical
                                ? "Explore All Interests →"
                                : "Explore All Projects →"}
                        </Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6">
                        {isWhimsical ? "Hobbies" : "Skills"}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {(isWhimsical ? hobbies : skills).map((item) => (
                            <span
                                key={item}
                                className="bg-white border border-accent text-text text-sm font-medium px-5 py-2 rounded-full shadow-sm transition-[border-color] duration-500"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
