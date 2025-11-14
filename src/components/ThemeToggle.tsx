"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg px-3 py-2 ring-1 ring-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
