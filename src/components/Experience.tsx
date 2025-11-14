// src/components/Experience.tsx
export default function Experience() {
  const jobs = [
    {
      company: "JST Gmbh",
      role: "Programator",
      period: "iunie 2022 — iunie 2023",
      tech: ".NET, C#, Xamarin, Azure DevOps",
      desc: "Aplicații mobile pentru retail",
    },
    {
      company: "Softnet",
      role: "Programator",
      period: "februarie 2021 — august 2022",
      tech: ".NET, C#, Angular, SQL Server",
      desc: "Aplicații fiscale pentru DGRFP (ANAF)",
    },
    {
      company: "Code932",
      role: "Programator",
      period: "august 2019 — iulie 2020",
      tech: ".NET, ASP.NET MVC, Unity 3D",
      desc: "Jocuri și aplicații educaționale",
    },
  ];

  return (
    <section className="mt-12 space-y-6">
      <h2 className="text-xl font-semibold">Experiență profesională</h2>
      {jobs.map((job) => (
        <div
          key={job.company}
          className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-5"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{job.role} @ {job.company}</h3>
            <span className="text-sm text-neutral-400">{job.period}</span>
          </div>
          <p className="text-neutral-300 mt-2">{job.desc}</p>
          <p className="text-sm text-neutral-500 mt-1">Tehnologii: {job.tech}</p>
        </div>
      ))}
    </section>
  );
}
