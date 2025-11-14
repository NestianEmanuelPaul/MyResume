import { cvData } from "@/lib/cv-data";

export default function Experience() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Experiență</h2>
      <div className="space-y-4">
        {cvData.experience.map((j) => (
          <div key={j.company} className="rounded-xl bg-neutral-900 p-5 ring-1 ring-neutral-800">
            <div className="flex items-center justify-between">
              <div className="font-medium">{j.role} • {j.company}</div>
              <div className="text-sm text-neutral-400">{j.period}</div>
            </div>
            <ul className="mt-3 space-y-1 text-neutral-300 list-disc pl-5">
              {j.bullets.map((b) => (
                <li key={b}><span className="break-words">{b}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
