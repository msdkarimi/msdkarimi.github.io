import { useState, useEffect } from 'react';
import { Container, Grid, ActionIcon, Tooltip } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { profile } from '../assets/data';
import { useScrollIntoView } from '@mantine/hooks';

import RightSide from './right';
import LeftSide from './left';
import SkillsPanel from './skills';

function ColorToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('cv-theme') || 'night'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cv-theme', theme);
  }, [theme]);

  const isDay = theme === 'day';
  return (
    <Tooltip label={isDay ? 'Switch to Night' : 'Switch to Day'} position="left">
      <ActionIcon
        className="cv-toggle"
        onClick={() => setTheme(isDay ? 'night' : 'day')}
        size="lg"
      >
        {isDay ? <IconMoon size={18} /> : <IconSun size={18} />}
      </ActionIcon>
    </Tooltip>
  );
}

function Main() {
  const p = 8;
  const offset = p * 10;
  const duration = 1000;

  const profileRef    = useScrollIntoView({ offset, duration });
  const experienceRef = useScrollIntoView({ offset, duration });
  const langRef       = useScrollIntoView({ offset, duration });
  const skillsRef     = useScrollIntoView({ offset, duration });
  const eduRef        = useScrollIntoView({ offset, duration });

  const all_refs = {
    Profile:     profileRef,
    Experiences: experienceRef,
    Education:   eduRef,
    Language:    langRef,
    Skills:      skillsRef,
  };

  return (
    <Container p={5} size="xl">
      <ColorToggle />
      {/* pt clears the fixed toggle button on all screen sizes */}
      <Grid gutter={p} pt={{ base: 52, sm: 52, md: p * 2 }}>
        <Grid.Col span={{ base: 12, sm: 4, md: 3 }}>
          <LeftSide all_refs={all_refs} child_paper_padding={p} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 8, md: 5 }}>
          <RightSide all_refs={all_refs} profile={profile} child_paper_padding={p} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <SkillsPanel skillsRef={skillsRef} child_paper_padding={p} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Main;
