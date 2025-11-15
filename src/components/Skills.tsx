import { FaCode, FaPython, FaReact, FaNode, FaDocker, FaGitAlt, FaAws, FaFigma, FaUnity, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiTypescript, SiMysql, SiPostgresql, SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface Tool {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const tools: Tool[] = [
  { name: "C#", category: "Programming", icon: <FaCode className="text-4xl" /> },
  { name: ".NET", category: "Framework", icon: <SiDotnet className="text-4xl" /> },
  { name: "JavaScript", category: "Programming", icon: <SiJavascript className="text-4xl" /> },
  { name: "TypeScript", category: "Programming", icon: <SiTypescript className="text-4xl" /> },
  { name: "Python", category: "Programming", icon: <FaPython className="text-4xl" /> },
  { name: "React", category: "Framework", icon: <FaReact className="text-4xl" /> },
  { name: "Next.js", category: "Framework", icon: <TbBrandNextjs className="text-4xl" /> },
  { name: "Node.js", category: "Framework", icon: <FaNode className="text-4xl" /> },
  { name: "Docker", category: "DevOps", icon: <FaDocker className="text-4xl" /> },
  { name: "Git", category: "DevOps", icon: <FaGitAlt className="text-4xl" /> },
  { name: "Azure", category: "Cloud", icon: <FaAws className="text-4xl" /> },
  { name: "Figma", category: "Design", icon: <FaFigma className="text-4xl" /> },
  { name: "Unity 3D", category: "Game Dev", icon: <FaUnity className="text-4xl" /> },
  { name: "SQL Server", category: "Database", icon: <FaDatabase className="text-4xl" /> },
  { name: "MySQL", category: "Database", icon: <SiMysql className="text-4xl" /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="text-4xl" /> },
  { name: "PyTorch", category: "AI/ML", icon: <SiPytorch className="text-4xl" /> },
  { name: "TensorFlow", category: "AI/ML", icon: <SiTensorflow className="text-4xl" /> },
  { name: "OpenCV", category: "AI/ML", icon: <SiOpencv className="text-4xl" /> },
];

export default function Skills() {
  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <FaCode className="text-2xl text-white" />
        <h2 className="text-3xl font-bold text-white">Stakes</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center p-4 bg-neutral-900 ring-1 ring-neutral-800 rounded-xl hover:ring-neutral-700 transition-all"
          >
            <div className="text-neutral-300 mb-2">{tool.icon}</div>
            <div className="text-xs font-medium text-center text-white">{tool.name}</div>
            <div className="text-xs text-neutral-400 text-center mt-1">{tool.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
