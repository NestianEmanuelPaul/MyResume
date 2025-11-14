import { cvData } from "@/lib/cv-data";

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl bg-neutral-900 p-5 ring-1 ring-neutral-800">
      <div className="font-medium">{title}</div>
      <ul className="mt-2 text-neutral-300 list-disc pl-5 space-y-1">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Abilități</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Group title="Generale" items={cvData.skills.general} />
        <Group title="Biblioteci AI" items={cvData.skills.aiLibs} />
        <Group title="Extra" items={cvData.skills.extras} />
        <Group title="Limbi" items={cvData.skills.languages} />
      </div>
    </section>
  );
}
