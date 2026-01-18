import { Box, Image, Container, Stack, Group, Avatar, Text, Title, List, Divider, Paper, Card, Anchor } from '@mantine/core';
import { IconPhoneFilled, IconBulbFilled, IconCertificate, IconMail, IconMapPin, IconLanguage } from "@tabler/icons-react";
import { left_side } from '../assets/data';


function LeftSide({ all_refs, child_paper_padding, technical_skills_list, personal_data, education}){
    // console.log(left_side)
    return(
        <Box className="custom-box glass" p={child_paper_padding}>
                <Stack gap="xs">
                {Object.entries(left_side).map(([section, items]) => (
                  <MyInfo
                    key={section}
                    child_paper_padding={child_paper_padding}
                    section={section}
                    items={items}
                    all_refs={all_refs}
                  />
                ))}
                  {/* {left_side.map((item, index)=><MyInfo child_paper_padding={child_paper_padding} personal_data={personal_data} education={education}/>)} */}
                </Stack>
        </Box>
    )
}
  
function MyInfo({section, items, all_refs}){
  const mapping_icons = {
    Contact:<IconPhoneFilled/>,
    Skills: <IconBulbFilled/>,
    Education: <IconCertificate/>,
    Email: <IconMail/>,
    Address:<IconMapPin/>,
    "M.Sc.": <IconCertificate/>,
    "B.Sc.": <IconCertificate/>,
    English: <IconLanguage/>,
    Italian: <IconLanguage/>,
  }
    return(
        <Stack key={section} gap="xs" ref={all_refs[section]?.targetRef}>
            <Paper ta="left" p="md" radius="lg" withBorder w="100%" className='glass-child'>
            <Group>
              {/* {mapping_icons[section]} */}
              <Title className='text-shadow' fw={100} order={2}>{section}</Title>
            </Group>
              <Divider className="divider-custom" size={1} w="50%" />
              {
                <Card className="experience-bg">
                {items.map((data, index)=>
                  <Stack pb="lg" key={index}>
                    <Group gap={2} key={data.id}>
                        {mapping_icons[data.id]}
                        <Text fw={600}>{data.id}</Text>
                    </Group>
                    <Stack pl={26}>
                      <Text mt={-15} fw={700}>{data.content}</Text>
                      <Text mt={-20} fw={300}>{data.at}</Text>
                    </Stack>
                  </Stack>
                )}
              </Card>
              }
            </Paper>
        </Stack>
    )

}

function ProfileImage(){
    return(
    <Box>
        <Image
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
    </Box>
    )
}

export default LeftSide