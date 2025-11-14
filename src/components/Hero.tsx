// src/components/Hero.tsx
"use client";
import dynamic from "next/dynamic";

const PrintCV = dynamic(() => import("./PrintCV"), { ssr: false });

export default function Hero() {
  return (
    <section className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
      <video
        src="/profile.mp4"
        poster="/poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl w-full h-auto object-cover ring-1 ring-neutral-800"
      />
      <div>
        <h1 className="text-3xl font-bold">Emanuel Nestian — Programator</h1>
        <p className="text-neutral-400 mt-2">
          Bazat în Iași. Integrez AI, platforme educaționale și sisteme scalabile.
        </p>
        <div className="mt-4">
          <PrintCV>
            <div className="hidden" /> {/* conținutul va fi în altă parte */}
          </PrintCV>
        </div>
      </div>
    </section>
  );
}
