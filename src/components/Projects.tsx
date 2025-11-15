import { cvData } from "@/lib/cv-data";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  // Map projects to categories for display
  const projectCategories: Record<string, string> = {
    "Reddit Automation": "Automation",
    "AR Unity + Google Maps": "AR & Mobile",
    "AR Demo": "AR & Mobile",
    "AI Projects": "AI & Machine Learning",
    "Zapier Automatizare": "Automation",
  };

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <FaArrowRight className="text-2xl text-white" />
        <h2 className="text-3xl font-bold text-white">Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cvData.projects.map((p) => (
          <a 
            key={p.title} 
            href={p.href} 
            target="_blank" 
            rel="noreferrer"
            className="group block rounded-xl overflow-hidden bg-neutral-900 ring-1 ring-neutral-800 hover:ring-neutral-700 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
              <div className="text-neutral-500 text-sm">Project Image</div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1 text-white">{p.title}</div>
                  <div className="text-xs text-neutral-500 mb-2">{projectCategories[p.title] || "Project"}</div>
                </div>
                <FaArrowRight className="text-neutral-500 group-hover:text-emerald-500 group-hover:translate-x-1 transition flex-shrink-0 mt-1" />
              </div>
              <div className="text-sm text-neutral-300">{p.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
