import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { profile, left_side, right_content } from '../assets/data';

const C = {
  accent:   '#0969da',
  text:     '#1f2328',
  dim:      '#57606a',
  muted:    '#8c959f',
  border:   '#d0d7de',
  accentBg: '#ddf4ff',
};

const S = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.text,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 42,
    paddingRight: 42,
    backgroundColor: '#ffffff',
  },

  // ── Header (full width) ───────────────────
  header: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: C.accent,
    borderBottomStyle: 'solid',
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 22,
    letterSpacing: -0.3,
    marginBottom: 2,
  },
  headerRole: { fontSize: 11, color: C.accent, marginBottom: 6 },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap' },
  contactItem: { fontSize: 7.5, color: C.dim, marginRight: 14 },

  // ── Main 2-column body ────────────────────
  body: { flexDirection: 'row', marginBottom: 10 },
  colMain:  { flex: 7, paddingRight: 14 },
  colSkills: {
    flex: 3,
    paddingLeft: 14,
    borderLeftWidth: 0.75,
    borderLeftColor: C.border,
    borderLeftStyle: 'solid',
  },

  // ── Bottom row ────────────────────────────
  bottom: {
    flexDirection: 'row',
    borderTopWidth: 0.75,
    borderTopColor: C.border,
    borderTopStyle: 'solid',
    paddingTop: 10,
    marginTop: 4,
  },
  colEdu:  { flex: 1, paddingRight: 12 },
  colLang: {
    flex: 1,
    paddingLeft: 12,
    borderLeftWidth: 0.75,
    borderLeftColor: C.border,
    borderLeftStyle: 'solid',
  },

  // ── Section titles ────────────────────────
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 7.5,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: C.muted,
    paddingBottom: 2,
    marginBottom: 6,
    borderBottomWidth: 0.75,
    borderBottomColor: C.border,
    borderBottomStyle: 'solid',
  },

  // ── Profile ───────────────────────────────
  profileText: { fontSize: 8.5, color: C.dim, lineHeight: 1.55, marginBottom: 5 },
  highlightRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  highlightTag: {
    fontSize: 7,
    color: C.accent,
    backgroundColor: C.accentBg,
    paddingTop: 2, paddingBottom: 2,
    paddingLeft: 5, paddingRight: 5,
    borderRadius: 10,
    marginRight: 3, marginBottom: 3,
  },

  // ── Experience ────────────────────────────
  expEntry: { marginBottom: 9 },
  expHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  expRole: { fontFamily: 'Helvetica-Bold', fontSize: 9.5, color: C.text },
  expDate: { fontSize: 7.5, color: C.dim },
  expMeta: { fontSize: 7.5, color: C.dim, marginBottom: 4 },

  projectBlock: {
    marginBottom: 5,
    paddingLeft: 7,
    borderLeftWidth: 1.5,
    borderLeftColor: C.accent,
    borderLeftStyle: 'solid',
  },
  projectHeaderRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 1.5 },
  projectName: { fontFamily: 'Helvetica-Bold', fontSize: 8.5, color: C.text, marginRight: 5 },
  customerTag: { fontSize: 7, color: C.muted, fontFamily: 'Helvetica-Oblique' },
  projectDesc: { fontSize: 8, color: C.dim, lineHeight: 1.5, marginBottom: 3 },
  bulletRow: { flexDirection: 'row', marginBottom: 2 },
  bulletDot: { width: 8, fontSize: 8, color: C.accent },
  bulletText: { flex: 1, fontSize: 8, color: C.dim, lineHeight: 1.45 },
  stackLine: { fontSize: 7, color: C.muted, fontFamily: 'Helvetica-Oblique', marginTop: 2 },

  // ── Skills (narrow column) ────────────────
  skillCategory: { marginBottom: 7 },
  skillCatName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 7.5,
    color: C.text,
    marginBottom: 2,
  },
  skillItem: { fontSize: 7, color: C.dim, lineHeight: 1.5, marginBottom: 1 },

  // ── Education ─────────────────────────────
  eduEntry: { marginBottom: 6 },
  eduDegree: { fontFamily: 'Helvetica-Bold', fontSize: 8.5, color: C.text },
  eduSub:    { fontSize: 8, color: C.dim },
  eduMeta:   { fontSize: 7.5, color: C.muted },

  // ── Languages ─────────────────────────────
  langEntry: { marginBottom: 5 },
  langRow:   { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  langName:  { fontFamily: 'Helvetica-Bold', fontSize: 8.5, color: C.text },
  langLevel: { fontSize: 7.5, color: C.dim },
  langBarBg: { height: 3, backgroundColor: '#eaeef2', borderRadius: 2 },
});

// ── Small helpers ─────────────────────────────────────────────────
const SectionTitle = ({ children }) => <Text style={S.sectionTitle}>{children}</Text>;

const Bullet = ({ text }) => (
  <View style={S.bulletRow}>
    <Text style={S.bulletDot}>•</Text>
    <Text style={S.bulletText}>{text}</Text>
  </View>
);

const ProjectBlock = ({ name, customer, description, bulet_point, stack }) => (
  <View style={S.projectBlock}>
    <View style={S.projectHeaderRow}>
      <Text style={S.projectName}>{name}</Text>
      {customer && <Text style={S.customerTag}>{customer}</Text>}
    </View>
    <Text style={S.projectDesc}>{description}</Text>
    {(bulet_point || []).slice(0, 3).map((b, i) => <Bullet key={i} text={b} />)}
    {stack?.length > 0 && <Text style={S.stackLine}>{stack.join(' · ')}</Text>}
  </View>
);

// ── Document ──────────────────────────────────────────────────────
function CVDocument() {
  return (
    <Document title={`${profile.name} — CV`} author={profile.name}>
      <Page size="A4" style={S.page}>

        {/* ── Full-width header ── */}
        <View style={S.header}>
          <Text style={S.name}>{profile.name}</Text>
          <Text style={S.headerRole}>{profile.role}</Text>
          <View style={S.contactRow}>
            <Text style={S.contactItem}>{profile.email}</Text>
            <Text style={S.contactItem}>github.com/itsmasoudkarimi</Text>
            <Text style={S.contactItem}>linkedin/masoud-karimi</Text>
            <Text style={S.contactItem}>{profile.location}</Text>
          </View>
        </View>

        {/* ── 70 / 30 body ── */}
        <View style={S.body}>

          {/* Left 70% — Profile + Experience */}
          <View style={S.colMain}>
            <SectionTitle>Profile</SectionTitle>
            <Text style={S.profileText}>{profile.profile}</Text>
            {profile.highlights?.length > 0 && (
              <View style={S.highlightRow}>
                {profile.highlights.map((h, i) => (
                  <Text key={i} style={S.highlightTag}>{h}</Text>
                ))}
              </View>
            )}

            <SectionTitle>Experience</SectionTitle>
            {right_content.Experiences.map((exp, i) => (
              <View key={i} style={S.expEntry}>
                <View style={S.expHeaderRow}>
                  <Text style={S.expRole}>{exp.role}</Text>
                  <Text style={S.expDate}>{exp.startDate} – {exp.endDate ?? 'Present'}</Text>
                </View>
                <Text style={S.expMeta}>
                  {exp.company}  ·  {exp.location}  ·  {exp.employmentType}
                </Text>
                {exp.projects
                  ? exp.projects.map((proj, j) => <ProjectBlock key={j} {...proj} />)
                  : <ProjectBlock
                      name={exp.project ?? exp.role}
                      description={exp.description}
                      bulet_point={exp.bulet_point}
                      stack={exp.stack}
                    />
                }
              </View>
            ))}
          </View>

          {/* Right 30% — Skills */}
          <View style={S.colSkills}>
            <SectionTitle>Skills</SectionTitle>
            {Object.entries(right_content.Skills).map(([cat, items]) => (
              <View key={cat} style={S.skillCategory}>
                <Text style={S.skillCatName}>{cat}</Text>
                {items.map((item, i) => (
                  <Text key={i} style={S.skillItem}>· {item}</Text>
                ))}
              </View>
            ))}
          </View>

        </View>

        {/* ── Full-width bottom: Education | Languages ── */}
        <View style={S.bottom}>

          <View style={S.colEdu}>
            <SectionTitle>Education</SectionTitle>
            {left_side.Education.map((edu, i) => (
              <View key={i} style={S.eduEntry}>
                <Text style={S.eduDegree}>{edu.id} – {edu.content}</Text>
                {edu.sub && <Text style={S.eduSub}>{edu.sub}</Text>}
                <Text style={S.eduMeta}>{edu.at}  ·  {edu.period}</Text>
              </View>
            ))}
          </View>

          <View style={S.colLang}>
            <SectionTitle>Languages</SectionTitle>
            {left_side.Language.map((lang, i) => (
              <View key={i} style={S.langEntry}>
                <View style={S.langRow}>
                  <Text style={S.langName}>{lang.id}</Text>
                  <Text style={S.langLevel}>{lang.content}</Text>
                </View>
                <View style={S.langBarBg}>
                  <View style={{ height: 3, width: `${lang.level}%`, backgroundColor: C.accent, borderRadius: 2 }} />
                </View>
              </View>
            ))}
          </View>

        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
