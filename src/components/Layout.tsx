import ThemeToggle from "./ThemeToggle";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg text-white">Emanuel Nestian</div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <Sidebar />
          <div className="flex-1 min-w-0 w-full md:w-auto">{children}</div>
        </div>
      </main>
      <footer className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-400 text-center">
        Built in Next.js | © {new Date().getFullYear()} Emanuel Nestian
      </footer>
    </div>
  );
}
