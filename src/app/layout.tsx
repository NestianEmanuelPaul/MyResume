// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Emanuel Nestian — CV",
  description: "Programator, integrator AI și platforme educaționale",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <ThemeProvider attribute="class" enableSystem>
          <main className="max-w-6xl mx-auto px-4 py-12">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
