import {
    Box,
    Group,
    Stack,
    Text,
    Badge,
    ThemeIcon,
    rem,
    Paper,
    Divider,
    Flex,
    Title,
    List,
    Card
  } from "@mantine/core";
  import { IconCalendar, IconMapPin, IconBriefcase, IconBuildingFactory2, IconTools } from "@tabler/icons-react";
  import { right_content } from "../assets/data";

function RightSide({ all_refs, profile, child_paper_padding}){
      
    return(
        <Box className="custom-box glass" radius="md" p={child_paper_padding} >
            <RightContent all_refs={all_refs} child_paper_padding={child_paper_padding} profile={profile} experience={right_content}/>
        </Box>
    )
}

function RightContent({ all_refs, child_paper_padding, profile, experience}){

    const iconMappings = {Skills:<IconTools/>, Experiences:<IconBriefcase/>}

    return(

        <Stack>
          <MyInfo child_paper_padding={child_paper_padding} profile={profile}/>
          {
            Object.entries(experience).map(([section, data])=>(
              <Paper ref={all_refs[section].targetRef} key={section} ta="left" p="lg" radius="lg" withBorder w="100%" className="glass-child">
                <Stack>
                  <Group> 
                    {iconMappings[section]}
                    <Title  order={3} fw={700}>{section}</Title>
                  </Group>
                    <Divider className="divider-custom"  size={3} w="45%"  />
                </Stack>
              
                {section !== "Skills"
                  ? data.map((item, index) => (
                      <ExperienceItem
                        key={index}
                        length={data.length}
                        index={index}
                        {...item}
                      />
                    ))
                  : <BulletPoint section={section} bulet_point={data} />
                }
              </Paper>
            ))}
        </Stack>
    )
}

  function MyInfo({child_paper_padding, profile}){
    return(
      <Stack ta="left" c="white" p={child_paper_padding*3}>
        <Title order={2}>{profile.name}</Title>
        <Title fw={200} mt={-15} order={2}>{profile.role}</Title>
        <Divider className="divider-custom" color="#ff922b" size={2} w="50%" />
        <Text size="lg" fw={200}>{profile.profile}</Text>
      </Stack>
    )
  }

  
  export function ExperienceItem({
    index,
    length,
    startDate,
    endDate,
    company,
    role,
    employmentType,
    project,
    workMode,
    description,
    location,
    stack,
    bulet_point,
  }) {
    return (
    <Stack>
      <Card className="experience-bg" mb={10} radius="md" px={15}>
      <Group align="flex-start" gap={rem(5)}  wrap="nowrap" pb={5}>
        <Stack gap="xs" flex={1}> 
          <Flex justify="space-between" align="center">
            <Stack>
              <Title className="text-shadow" order={2} fw={400}>
                {role}
              </Title>
              <Text fw={200} className="text-shadow" c="dimmed" ml={2} mt={-15}>{project}</Text>
            </Stack>
            <Badge
            leftSection={<IconCalendar size={20} />}
            variant="light"
            radius="xs"
            className="custom-color"
          >
            <Group><Text size="sm" fw={200}>{startDate}</Text> – <Text size="sm" fw={200}>{endDate ?? "Present"}</Text></Group>
            </Badge>
          </Flex>
          <Group c="dimmed" gap="xs">
            <ThemeIcon size={24} className="custom-color" variant="light" radius="xl">
              <IconBuildingFactory2 size={24} />
            </ThemeIcon>
            <Text size="md">{company}</Text>
            <ThemeIcon size={24} variant="light" radius="xl">
              <IconMapPin className="custom-color" size={24} />
            </ThemeIcon>
            <Text size="md">{location} |</Text>
            <Text >
            {employmentType} • {workMode}
          </Text>
          </Group>
          <Text ta="justify" fw={600} lh={1.6}>
            {description}
          </Text>
        </Stack>
      </Group>
      <BulletPoint key={index} bulet_point={bulet_point}/>
      <Text>Stack:</Text>
      <Group gap="xs">
        {stack.map((data, index)=> <Badge radius="md" tt="none" fw={400} variant="light" className="custom-color" key={index}>{data}</Badge>)}
      </Group>
      {/* { length -1  !== index ? <Divider className="divider-custom" size={1} mx="xl" /> : <></>} */}
      </Card>
      </Stack>
      
    );
  }

  function BulletPoint({ section, bulet_point }) {
    return section === "Skills" ? (
      <Stack>
        {Object.entries(bulet_point).map(([title, data]) => (
          <Stack key={title}>
            <Card className="experience-bg" mb={10} radius="md" px={5}>
            <Title fw={600} order={3}>{title}</Title>
  
            {data.length > 0 && (
              <List size="md" withPadding>
                {data.map((item, index) => (
                  <List.Item ta="justify" fw={300} key={index}>
                    {item}
                  </List.Item>
                ))}
              </List>
            )}
            </Card>
          </Stack>
        ))}

      </Stack>
    ) : (
      <List size="md" pt="xs">
        {bulet_point.map((item, index) => (
          <List.Item ta="justify" pt="xs" fw={300} key={index}>
            {item}
          </List.Item>
        ))}
      </List>
    );
  }
  
    

export default RightSide