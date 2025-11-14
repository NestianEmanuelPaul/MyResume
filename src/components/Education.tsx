import { cvData } from "@/lib/cv-data";

export default function Education() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Educație</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {cvData.education.map((e) => (
          <div key={e.title} className="rounded-xl bg-neutral-900 p-5 ring-1 ring-neutral-800">
            <div className="font-medium">{e.title}</div>
            <div className="text-sm text-neutral-400">{e.school} • {e.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
