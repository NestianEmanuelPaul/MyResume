// src/components/Stats.tsx
import { cvData } from "@/lib/cv-data";

export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {cvData.stats.map((item) => (
        <div
          key={item.label}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.value}</div>
          <div className="text-sm text-neutral-400">{item.label}</div>
        </div>
      ))}
    </section>
  );
}
