import {
  HStack,
  TabList,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";

function TabsNav() {
  return (
    <HStack width="100%" p={4}>
      <Tabs width="100%" p={0} isFitted align="center">
        <TabList textColor={"black"}>
          <Tab>all</Tab>
          <Tab>completed</Tab>
          <Tab>waiting</Tab>
          <Tab>error</Tab>
        </TabList>

        <TabPanels textColor={"black"}>
          <TabPanel>
            <p>all</p>
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
  );
}

export default TabsNav;
