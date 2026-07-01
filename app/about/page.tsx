import Image from "next/image";

export default function About() {
  return (
    <div className="py-16">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-14">
        Building systems, teaching fundamentals, and writing clean code.
      </h1>

      {/*
        Mobile:  flex-col-reverse → image (2nd in DOM) floats to top, text below
        Desktop: md:grid 2-cols  → DOM order restored: text left, image right
      */}
      <div className="flex flex-col-reverse gap-10 md:grid md:grid-cols-2 md:gap-16 items-start">
        {/* ── Text ── */}
        <div className="space-y-6 text-secondary leading-relaxed">
          <p>
            Hi, I&apos;m Caleb. I am a junior studying Computer Science at The
            University of Texas at Austin. I specialize in building full-stack
            applications and understanding the foundational architecture that
            makes them run efficiently. I am currently actively seeking software
            engineering internship opportunities for Summer 2027.
          </p>
          <p>
            I have been writing code for nearly fifteen years, working deeply
            with Python, C, and Java. Beyond just building projects, I am
            passionate about breaking down complex technical concepts. As an
            Undergraduate Course Assistant and a Program Assistant for UTCS
            Summer Academies, I have mentored hundreds of students in Python
            fundamentals and debugging strategies. I believe that the best way
            to truly master software architecture is to teach it.
          </p>
          <p>
            When I am not working on web applications or configuring Arch Linux
            environments, you can usually find me producing my own music,
            training for my next 10K run, or optimizing technical server setups.
          </p>
        </div>

        {/* ── Photo — replace src with your real image path when ready ── */}
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-md">
          <Image
            src="https://placehold.co/480x600/C4CCD5/01200F"
            alt="Caleb Pickens"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
