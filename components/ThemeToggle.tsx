"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [flashing, setFlashing] = useState(false);

  useEffect(() => setMounted(true), []);

  // Render a same-size placeholder before mount to avoid layout shift
  if (!mounted) {
    return <div className="w-[104px] h-8 rounded-full" />;
  }

  const isWhimsical = theme === "whimsical";

  const handleToggle = () => {
    setFlashing(true);
    setTheme(isWhimsical ? "professional" : "whimsical");
    setTimeout(() => setFlashing(false), 600);
  };

  return (
    <>
      {flashing && (
        <div
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            background: isWhimsical
              ? "radial-gradient(circle at center, rgba(196,204,213,0.55) 0%, transparent 70%)"
              : "radial-gradient(circle at center, rgba(125,211,252,0.55) 0%, transparent 70%)",
            animation: "theme-flash 0.6s ease-out forwards",
          }}
        />
      )}
      <button
        onClick={handleToggle}
        aria-label={isWhimsical ? "Switch to Professional mode" : "Switch to Fun mode"}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary text-white hover:opacity-80 active:scale-95 transition-all duration-200"
      >
        <span className="text-base">{isWhimsical ? "👔" : "✨"}</span>
        <span className="hidden sm:inline">
          {isWhimsical ? "Pro Mode" : "Fun Mode"}
        </span>
      </button>
    </>
  );
}
