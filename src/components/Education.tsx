import { cvData } from "@/lib/cv-data";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <FaGraduationCap className="text-2xl text-white" />
        <h2 className="text-3xl font-bold text-white">Education</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {cvData.education.map((e) => (
          <div key={e.title} className="bg-neutral-900 ring-1 ring-neutral-800 rounded-xl p-6">
            <div className="font-semibold text-lg mb-1 text-white">{e.title}</div>
            <div className="text-neutral-400 mb-1">{e.school}</div>
            <div className="text-sm text-neutral-500">{e.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
