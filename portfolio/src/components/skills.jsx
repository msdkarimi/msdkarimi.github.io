import { Box, Stack, List, Card, Group } from "@mantine/core";
import { IconBrain, IconTools, IconBuildingFactory2 } from "@tabler/icons-react";
import { right_content } from "../assets/data";

const accent = { color: 'var(--accent)' };
const dim    = { color: 'var(--text-dim)' };

const categoryIcon = {
  "Machine Learning & Deep Learning": <IconBrain size={13} />,
  "Agentic AI & LLM Systems":          <IconTools size={13} />,
  "Engineering & Infrastructure":       <IconBuildingFactory2 size={13} />,
};

function SkillsPanel({ skillsRef, child_paper_padding }) {
  return (
    <Box className="cv-panel" p={child_paper_padding} ref={skillsRef?.targetRef}>
      <Box className="cv-section" p="md" style={{ textAlign: "left" }}>
        <Group gap={8} mb={4}>
          <span style={accent}><IconTools size={14} /></span>
          <span className="cv-section-title">Skills</span>
        </Group>
        <div className="cv-divider" style={{ width: "70%" }} />

        <Stack gap={8} mt={4}>
          {Object.entries(right_content.Skills).map(([title, items]) => (
            <Card key={title} className="cv-card" p="sm" radius="md">
              <Group gap={6} mb={6} wrap="nowrap">
                <span style={{ ...accent, flexShrink: 0 }}>{categoryIcon[title]}</span>
                <span className="cv-section-title" style={{ lineHeight: 1.5 }}>{title}</span>
              </Group>
              <div className="cv-divider" style={{ width: "100%", marginTop: 0 }} />
              <List size="xs" spacing={3} withPadding>
                {items.map((item, i) => (
                  <List.Item key={i} style={{ ...dim, lineHeight: 1.65, fontSize: 12 }}>
                    {item}
                  </List.Item>
                ))}
              </List>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default SkillsPanel;
