import { cvData } from "@/lib/cv-data";

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Proiecte</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cvData.projects.map((p) => (
          <a key={p.title} href={p.href} target="_blank" rel="noreferrer"
             className="group block rounded-xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-neutral-400">{p.desc}</div>
                </div>
                <span className="text-(--accent) opacity-0 group-hover:opacity-100 transition">→</span>
              </div>
            </div>
            <div className="h-1 bg-neutral-800 group-hover:bg-(--accent) transition" />
          </a>
        ))}
      </div>
    </section>
  );
}
