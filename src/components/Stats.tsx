// src/components/Stats.tsx
export default function Stats() {
  const items = [
    { label: "Ani experiență", value: "8" },
    { label: "Companii", value: "4" },
    { label: "Proiecte personale", value: "8" },
    { label: "Integrări AI", value: "4" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-4 text-center"
        >
          <div className="text-2xl font-semibold text-emerald-400">{item.value}</div>
          <div className="text-sm text-neutral-400 mt-1">{item.label}</div>
        </div>
      ))}
    </section>
  );
}
