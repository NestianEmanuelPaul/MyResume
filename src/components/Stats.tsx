import { cvData } from "@/lib/cv-data";

export default function Stats() {
  return (
    <section className="py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {cvData.stats.map((it) => (
        <div key={it.label} className="rounded-xl bg-neutral-900 p-4 ring-1 ring-neutral-800">
          <div className="text-2xl font-semibold">{it.value}</div>
          <div className="mt-1 text-sm text-neutral-400">{it.label}</div>
        </div>
      ))}
    </section>
  );
}
