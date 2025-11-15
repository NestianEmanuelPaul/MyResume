// src/components/Experience.tsx
import { cvData } from "@/lib/cv-data";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <FaBriefcase className="text-2xl text-white" />
        <h2 className="text-3xl font-bold text-white">Experience</h2>
      </div>
      <div className="space-y-6">
        {cvData.experience.map((job) => (
          <div
            key={job.company}
            className="flex gap-4 items-start rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-5"
          >
            <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
              <FaBriefcase className="text-xl text-neutral-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-lg text-neutral-400">{job.company}</p>
                </div>
                <span className="text-sm text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full">{job.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-neutral-300 text-sm">• {bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
