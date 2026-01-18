import { Container, Grid, Box, Flex, NavLink, Title, Group, UnstyledButton, Text } from '@mantine/core';
import { personal_data, education, profile } from '../assets/data';
import { useScrollIntoView } from '@mantine/hooks';
import { IconTimeDuration10 } from "@tabler/icons-react";

import RightSide from './right';
import LeftSide from './left';

function Main(){
    const child_paper_padding = 8
    const duration = 1000
    const offset = child_paper_padding * 10
    const profileRef = useScrollIntoView({ offset: offset, duration: duration });
    const experienceRef = useScrollIntoView({ offset: offset, duration: duration });
    const langRef = useScrollIntoView({ offset: offset, duration: duration });
    const skillsRef = useScrollIntoView({ offset: offset, duration: duration });
    const eduRef = useScrollIntoView({ offset: offset, duration: duration });
    const all_refs = {Profile:profileRef, Experiences:experienceRef, Education:eduRef, Language:langRef, Skills:skillsRef}

    return(
        <Container p={5} size="md">
          <Header 
            onProfile={() => profileRef.scrollIntoView()}
            onLang={() => langRef.scrollIntoView()}
            onSkills={() => skillsRef.scrollIntoView()}
            all_refs={all_refs}
          />
          <Grid gutter={child_paper_padding} h="100%" pt={child_paper_padding*5}>
            
            <Grid.Col span={4} h="100%">
              <LeftSide all_refs={all_refs} child_paper_padding={child_paper_padding} personal_data={personal_data} education={education}/>
            </Grid.Col>
        
            <Grid.Col span={8} h="100%" >
              <RightSide all_refs={all_refs} profile={profile} child_paper_padding={child_paper_padding}/>
            </Grid.Col>
          </Grid>

        </Container>
        
    )
}

function Header({ all_refs }) {
  return (
    <Box className="custom-box glass header-fixed" >
      <Group gap="xl" px={30} w="100%">
        {Object.entries(all_refs).map(([section, item]) => (
          <UnstyledButton
            key={section}
            onClick={() => item.scrollIntoView()}
          >
            <Title c="white" order={3} fw={200}>
              {section}
            </Title>
          </UnstyledButton>
        ))}
      </Group>
    </Box>
  );
}


export default Main