import { useState } from 'react';
import { Box, Group, Stack, Text, Badge, List, Card, Collapse } from "@mantine/core";
import {
  IconCalendar, IconMapPin, IconBriefcase,
  IconBuildingFactory2, IconChevronDown,
} from "@tabler/icons-react";
import { right_content, profile } from "../assets/data";

const accent = { color: 'var(--accent)' };
const dim    = { color: 'var(--text-dim)' };
const muted  = { color: 'var(--text-muted)' };

function RightSide({ all_refs, child_paper_padding }) {
  return (
    <Box className="cv-panel" p={child_paper_padding}>
      <Stack gap="xs">
        <ProfileInfo child_paper_padding={child_paper_padding} profile={profile} />
        <Box
          ref={all_refs["Experiences"].targetRef}
          className="cv-section"
          p="md"
          style={{ textAlign: "left" }}
        >
          <Group gap={8} mb={4}>
            <span style={accent}><IconBriefcase size={14} /></span>
            <span className="cv-section-title">Experiences</span>
          </Group>
          <div className="cv-divider" style={{ width: "45%" }} />
          <div className="cv-timeline">
            {right_content.Experiences.map((item, index) => {
              const isActive = !item.endDate || item.endDate === "Present";
              return (
                <div
                  key={index}
                  className={`cv-timeline-item${isActive ? ' cv-timeline-active' : ''}`}
                >
                  <ExperienceItem {...item} />
                </div>
              );
            })}
          </div>
        </Box>
      </Stack>
    </Box>
  );
}

function ProfileInfo({ child_paper_padding, profile }) {
  return (
    <Box className="cv-section" p={child_paper_padding * 3} style={{ textAlign: "left" }}>
      <span className="cv-name">{profile.name}</span>
      <br />
      <span className="cv-role">{profile.role}</span>
      <div className="cv-divider" style={{ width: "55%", marginTop: 10 }} />
      <Text size="sm" style={{ ...dim, lineHeight: 1.75, marginBottom: 12 }}>
        {profile.profile}
      </Text>
      {profile.highlights && (
        <Group gap={6} wrap="wrap">
          {profile.highlights.map((h, i) => (
            <Badge key={i} className="cv-highlight">{h}</Badge>
          ))}
        </Group>
      )}
    </Box>
  );
}

export function ExperienceItem({
  startDate, endDate, company, role, employmentType,
  project, workMode, description, location, stack, bulet_point, projects,
}) {
  return (
    <Card className="cv-card" mb={10} p="md" radius="md">
      {/* Header */}
      <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
        <Stack gap={2}>
          <span className="cv-exp-role">{role}</span>
          {project && !projects && (
            <Text size="xs" style={{ ...accent, fontWeight: 500 }}>◆ {project}</Text>
          )}
        </Stack>
        <Badge className="cv-badge" leftSection={<IconCalendar size={10} />}>
          {startDate} – {endDate ?? "Present"}
        </Badge>
      </Box>

      <Box mt={8} mb={projects ? 4 : 6}>
        <Group gap={6} wrap="nowrap" className="cv-company-row">
          <IconBuildingFactory2 size={13} style={{ flexShrink: 0, ...accent }} />
          <Text size="sm" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", ...dim }}>
            {company}
          </Text>
          <Text size="sm" style={{ flexShrink: 0, ...muted }}>·</Text>
          <IconMapPin size={13} style={{ flexShrink: 0, ...accent }} />
          <Text size="sm" style={dim}>{location}</Text>
        </Group>
        <Text size="xs" mt={2} ml={19} style={muted}>{employmentType} · {workMode}</Text>
      </Box>

      {/* Multi-project: collapsible blocks */}
      {projects ? (
        <Stack gap={6} mt={6}>
          {projects.map((proj, i) => (
            <ProjectBlock key={i} {...proj} defaultOpen={false} />
          ))}
        </Stack>
      ) : (
        /* Single-project (legacy) */
        <>
          <Text size="sm" ta="justify" lh={1.7} mb={8} style={dim}>{description}</Text>
          <BulletList items={bulet_point} />
          <span className="cv-label" style={{ display: 'block', marginTop: 10, marginBottom: 4 }}>Stack</span>
          <Group gap={4} wrap="wrap">
            {stack.map((item, i) => <Badge key={i} className="cv-badge">{item}</Badge>)}
          </Group>
        </>
      )}
    </Card>
  );
}

function ProjectBlock({ name, customer, description, bulet_point, stack, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`cv-project-block${open ? ' cv-project-block--open' : ''}`}>
      {/* Clickable header */}
      <Box
        onClick={() => setOpen(o => !o)}
        className="cv-project-header"
      >
        <Group justify="space-between" align="center" wrap="nowrap" gap={8}>
          <Group gap={8} align="center" style={{ minWidth: 0, flex: 1 }}>
            <span className="cv-project-name">{name}</span>
            {customer && <span className="cv-customer-tag">{customer}</span>}
          </Group>
          <Group gap={4} align="center" style={{ flexShrink: 0 }}>
            <Text size="xs" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              {open ? 'Show less' : 'Show more'}
            </Text>
            <IconChevronDown
              size={12}
              style={{
                color: 'var(--accent)',
                transform: open ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
          </Group>
        </Group>

        {/* One-line preview when collapsed */}
        {!open && (
          <Text size="xs" mt={4} style={{ ...muted, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
            {description}
          </Text>
        )}
      </Box>

      {/* Expandable detail */}
      <Collapse in={open}>
        <Box pt={10}>
          <Text size="sm" ta="justify" lh={1.7} mb={8} style={dim}>{description}</Text>
          <BulletList items={bulet_point} />
          {stack?.length > 0 && (
            <>
              <span className="cv-label" style={{ display: 'block', marginTop: 10, marginBottom: 6 }}>Stack</span>
              <Group gap={4} wrap="wrap">
                {stack.map((item, i) => <Badge key={i} className="cv-badge">{item}</Badge>)}
              </Group>
            </>
          )}
        </Box>
      </Collapse>
    </div>
  );
}

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <List size="sm" spacing={4} style={{ paddingLeft: 16 }} mb={4}>
      {items.map((item, i) => (
        <List.Item key={i} style={{ ...dim, lineHeight: 1.65, textAlign: "justify" }}>{item}</List.Item>
      ))}
    </List>
  );
}

export default RightSide;
