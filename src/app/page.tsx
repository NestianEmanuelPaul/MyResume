import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import PrintCV from "@/components/PrintCV";

export default function Page() {
  return (
    <Layout>
      <PrintCV>
        <Hero />
        <Stats />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </PrintCV>
    </Layout>
  );
}
