import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import PdfDownload from "@/components/PdfDownload";

export default function Page() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <PdfDownload />
      <Contact />
    </Layout>
  );
}
