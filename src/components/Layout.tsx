import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">Emanuel Nestian</div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="px-3 py-2 bg-[var(--accent)] text-black rounded-lg hover:opacity-90">Contactează-mă</a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4">{children}</main>
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">© {new Date().getFullYear()} Emanuel Nestian</footer>
    </div>
  );
}
