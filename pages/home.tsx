
import { HStack, Tabs, TabList, Tab, TabPanels, TabPanel, SimpleGrid, Text, Box, Divider } from "@chakra-ui/react";
import React from "react";
import CloseIcon from "../components/Icons/CloseIcon";
import ImageCard from "../components/UI/ImageCard";

import Layout from "../views/layout";

function Home() {
  return (
    <Layout>
      <HStack width="100%" p={4}>
        <Tabs width="100%" p={0} isFitted>
          <TabList textColor={"black"}>
            <Tab>all</Tab>
            <Tab>completed</Tab>
            <Tab>waiting</Tab>
            <Tab>error</Tab>
          </TabList>

          <TabPanels textColor={"black"}>
            <TabPanel>
              <HStack>
                <Box>
                  <SimpleGrid
                    spacing={5}
                    columns={{ base: 2, md: 4, xl: 6 }}
                    mt="32px"
                  >
                    <ImageCard id="1" w="176px" h="176" />
                    <ImageCard id="1" w="176px" h="176" />
                    <ImageCard id="1" w="176px" h="176" />
                    <ImageCard id="1" w="176px" h="176" />
                  </SimpleGrid>
                  <Text
                    mt="15px"
                    fontWeight="700"
                    fontSize="12px"
                    lineHeight="16px"
                  >
                    Landscape painting of forest and castle in the style of
                    realism
                  </Text>
                </Box>
                <CloseIcon />
              </HStack>
              <Divider mt="33px" borderColor={"#DDDDDD"} />
            </TabPanel>
            <TabPanel>
              <p>completed</p>
            </TabPanel>
            <TabPanel>
              <p>waiting</p>
            </TabPanel>
            <TabPanel>
              <p>error</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>
    </Layout>
  );
}

export default Home;
