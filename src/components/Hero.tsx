"use client";
import { motion } from "framer-motion";
import { cvData } from "@/lib/cv-data";

export default function Hero() {
  const p = cvData.profile;

  return (
    <section className="py-12 grid md:grid-cols-[220px_1fr] gap-8 items-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="relative w-56 h-56 rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-black">
          <video
            src={p.videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/poster.jpg"
          />
          {p.available && (
            <span className="absolute top-2 left-2 bg-[var(--accent)] text-black text-xs px-2 py-1 rounded">
              Available for work
            </span>
          )}
        </div>
      </motion.div>
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">{p.name} — {p.role}</h1>
        <p className="mt-2 text-neutral-300">Bazat în {p.city}. Integrez AI, platforme educaționale și sisteme scalabile.</p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="px-4 py-2 bg-[var(--accent)] text-black rounded-lg hover:opacity-90">Contactează-mă</a>
          <a href="#download" className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700">Descarcă CV (PDF)</a>
        </div>
      </div>
    </section>
  );
}
