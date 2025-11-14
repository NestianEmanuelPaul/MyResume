"use client";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { cvData } from "@/lib/cv-data";

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, color: "#111", fontFamily: "Helvetica" },
  h1: { fontSize: 20, marginBottom: 6 },
  h2: { fontSize: 14, marginTop: 16, marginBottom: 8, color: "#0f766e" }, // emerald-ish
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

export default function PdfDownload() {
  return (
    <section id="download" className="py-8">
      <PDFDownloadLink
        document={<CVDocument />}
        fileName="Emanuel_Nestian_CV.pdf"
        className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 inline-block"
      >
        {({ loading }) => loading ? "Generez PDF..." : "Descarcă CV (PDF)"}
      </PDFDownloadLink>
    </section>
  );
}
