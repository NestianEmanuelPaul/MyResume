"use client";
import { cvData } from "@/lib/cv-data";
import dynamic from "next/dynamic";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { FaInstagram, FaTwitter, FaYoutube, FaDribbble, FaBehance, FaDownload, FaPaperPlane } from "react-icons/fa";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, color: "#111", fontFamily: "Helvetica" },
  h1: { fontSize: 20, marginBottom: 6 },
  h2: { fontSize: 14, marginTop: 16, marginBottom: 8, color: "#0f766e" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  card: { marginBottom: 8, paddingBottom: 6, borderBottom: 1, borderColor: "#ddd" },
  small: { color: "#666" },
});

function CVDocument() {
  const p = cvData.profile;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>{p.name} — {p.role}</Text>
        <Text style={styles.small}>{p.city} • {p.email} • {p.phone}</Text>
        <Text style={styles.h2}>Statistici</Text>
        <View style={styles.row}>
          {cvData.stats.map(s => <Text key={s.label}>{s.value} {s.label}</Text>)}
        </View>
        <Text style={styles.h2}>Experiență</Text>
        {cvData.experience.map(exp => (
          <View key={exp.company} style={styles.card}>
            <Text>{exp.role} • {exp.company}</Text>
            <Text style={styles.small}>{exp.period}</Text>
            {exp.bullets.map(b => <Text key={b}>• {b}</Text>)}
          </View>
        ))}
        <Text style={styles.h2}>Educație</Text>
        {cvData.education.map(ed => (
          <View key={ed.title} style={styles.card}>
            <Text>{ed.title}</Text>
            <Text style={styles.small}>{ed.school} • {ed.period}</Text>
          </View>
        ))}
        <Text style={styles.h2}>Abilități</Text>
        <Text>Generale: {cvData.skills.general.join("; ")}</Text>
        <Text>AI: {cvData.skills.aiLibs.join("; ")}</Text>
        <Text>Extra: {cvData.skills.extras.join("; ")}</Text>
        <Text>Limbi: {cvData.skills.languages.join("; ")}</Text>
        <Text style={styles.h2}>Proiecte</Text>
        {cvData.projects.map(pr => (
          <View key={pr.title} style={styles.card}>
            <Text>{pr.title} — {pr.desc}</Text>
            <Text style={styles.small}>{pr.href}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default function Sidebar() {
  const p = cvData.profile;
  
  return (
    <aside className="w-full md:w-[280px] flex-shrink-0 md:sticky md:top-20 md:self-start">
      <div className="space-y-6">
        {/* Profile Image */}
        <div className="relative">
          <video
            src="/profile.mp4"
            poster="/poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full h-auto object-cover ring-1 ring-neutral-800"
          />
          {p.available && (
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Available for work
            </div>
          )}
        </div>

        {/* Profile Info Section */}
        <div className="bg-neutral-900 ring-1 ring-neutral-800 rounded-xl p-6 space-y-4">
          {/* Available Status */}
          {p.available && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-neutral-400">Available for work</span>
            </div>
          )}

          {/* Name */}
          <h2 className="text-2xl font-bold text-white">{p.name}</h2>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a 
              href={p.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href={p.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-500 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href={p.social.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-500 transition"
            >
              <FaYoutube size={20} />
            </a>
            <a 
              href={p.social.dribbble} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-500 transition"
            >
              <FaDribbble size={20} />
            </a>
            <a 
              href={p.social.behance} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-500 transition"
            >
              <FaBehance size={20} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <PDFDownloadLink
              document={<CVDocument />}
              fileName="Emanuel_Nestian_CV.pdf"
              className="px-4 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition font-medium flex items-center justify-center gap-2"
            >
              {({ loading }) => (
                <>
                  <FaDownload size={16} />
                  {loading ? "Generating..." : "Download CV"}
                </>
              )}
            </PDFDownloadLink>
            <a 
              href="#contact"
              className="px-4 py-3 bg-emerald-500 text-white rounded-lg hover:opacity-90 transition font-medium flex items-center justify-center gap-2"
            >
              <FaPaperPlane size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

