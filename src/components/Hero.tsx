// src/components/Hero.tsx
import { cvData } from "@/lib/cv-data";

export default function Hero() {
  const p = cvData.profile;
  
  return (
    <section className="py-8">
      <div>
        <p className="text-sm text-neutral-400 mb-2">👋 Say Hello</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
          I'm {p.name}, <span className="text-emerald-500">{p.role}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-300">
          Based in {p.city}.
        </h2>
        <p className="text-neutral-300 text-lg leading-relaxed mb-6 max-w-2xl">
          I specialize in creating clean, user-friendly digital experiences by blending creativity with functionality. With a strong background in interactive design, I focus on crafting designs that not only look great but also provide smooth and engaging user interactions, helping ideas come to life seamlessly.
        </p>
      </div>
    </section>
  );
}
