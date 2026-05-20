import { useState } from 'react';
import { Box, Stack, Group, Text, Card } from '@mantine/core';
import {
  IconMail, IconMapPin, IconBrandGithub, IconBrandLinkedin,
  IconCertificate, IconLanguage, IconChartBar, IconDownload,
} from "@tabler/icons-react";
import { left_side, profile, stats } from '../assets/data';

const accent  = { color: 'var(--accent)' };
const dim     = { color: 'var(--text-dim)' };
const muted   = { color: 'var(--text-muted)' };

function LeftSide({ all_refs, child_paper_padding }) {
  return (
    <Box className="cv-panel" p={child_paper_padding}>
      <Stack gap="xs">
        <DownloadButton />
        <ContactSection all_refs={all_refs} />
        <StatsSection />
        <EducationSection all_refs={all_refs} />
        <LanguageSection all_refs={all_refs} />
      </Stack>
    </Box>
  );
}

function DownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./CVDocument'),
      ]);
      const { createElement } = await import('react');
      const blob = await pdf(createElement(CVDocument)).toBlob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = 'Masoud-Karimi-CV.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('PDF generation failed', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="cv-download-btn"
      style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
    >
      <IconDownload size={16} />
      {loading ? 'Generating…' : 'Download CV'}
    </button>
  );
}

function SectionBox({ title, icon, refTarget, children }) {
  return (
    <Box className="cv-section" p="md" style={{ textAlign: 'left' }} ref={refTarget}>
      <Group gap={8} mb={4}>
        <span style={accent}>{icon}</span>
        <span className="cv-section-title">{title}</span>
      </Group>
      <div className="cv-divider" style={{ width: '60%' }} />
      <Card className="cv-card" p="sm" mt={4} radius="md">
        {children}
      </Card>
    </Box>
  );
}

function ContactSection({ all_refs }) {
  return (
    <SectionBox title="Contact" icon={<IconMail size={14} />} refTarget={all_refs['Profile']?.targetRef}>
      <Stack gap={10}>
        <a href={`mailto:${profile.email}`} className="cv-link">
          <IconMail size={14} style={accent} />
          <Text size="xs" style={dim}>{profile.email}</Text>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="cv-link">
          <IconBrandGithub size={14} style={accent} />
          <Text size="xs" style={dim}>github.com/itsmasoudkarimi</Text>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="cv-link">
          <IconBrandLinkedin size={14} style={accent} />
          <Text size="xs" style={dim}>linkedin / masoud-karimi</Text>
        </a>
        <Group gap={6}>
          <IconMapPin size={14} style={accent} />
          <Text size="xs" style={dim}>{profile.location}</Text>
        </Group>
      </Stack>
    </SectionBox>
  );
}

function StatsSection() {
  return (
    <Box className="cv-section" p="md" style={{ textAlign: 'left' }}>
      <Group gap={8} mb={4}>
        <span style={accent}><IconChartBar size={14} /></span>
        <span className="cv-section-title">Stats</span>
      </Group>
      <div className="cv-divider" style={{ width: '60%' }} />
      <div className="cv-stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="cv-stat">
            <span className="cv-stat-value">{s.value}</span>
            <span className="cv-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </Box>
  );
}

function EducationSection({ all_refs }) {
  return (
    <SectionBox
      title="Education"
      icon={<IconCertificate size={14} />}
      refTarget={all_refs['Education']?.targetRef}
    >
      <Stack gap={12}>
        {left_side.Education.map((item, i) => (
          <Stack key={i} gap={2}>
            <Group gap={6} justify="space-between">
              <Group gap={6}>
                <IconCertificate size={12} style={accent} />
                <span className="cv-label">{item.id}</span>
              </Group>
              {item.period && (
                <Text size="xs" style={muted}>{item.period}</Text>
              )}
            </Group>
            <Text size="sm" fw={600} pl={18} style={{ color: 'var(--text)' }}>{item.content}</Text>
            {item.sub && <Text size="xs" pl={18} style={dim}>{item.sub}</Text>}
            <Text size="xs" pl={18} style={muted}>{item.at}</Text>
          </Stack>
        ))}
      </Stack>
    </SectionBox>
  );
}

function LanguageSection({ all_refs }) {
  return (
    <SectionBox
      title="Language"
      icon={<IconLanguage size={14} />}
      refTarget={all_refs['Language']?.targetRef}
    >
      <Stack gap={10}>
        {left_side.Language.map((lang, i) => (
          <Box key={i}>
            <Group justify="space-between" mb={2}>
              <Group gap={6}>
                <IconLanguage size={12} style={accent} />
                <Text size="sm" fw={600} style={{ color: 'var(--text)' }}>{lang.id}</Text>
              </Group>
              <Text size="xs" style={dim}>{lang.content}</Text>
            </Group>
            <div className="cv-lang-bar">
              <div className="cv-lang-fill" style={{ width: `${lang.level}%` }} />
            </div>
          </Box>
        ))}
      </Stack>
    </SectionBox>
  );
}

export default LeftSide;
