import { Flex, VStack, StackDivider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Cards from "../../components/Navigate/Cards";
import MenuBar from "../../components/Navigate/MenuBar";
import TabsNav from "../../components/UI/TabsNav";

const Layout: NextPage = () => {
  return (
    <VStack spacing={0} bgColor={"white"}>
      <Flex bg="black" as="nav" wrap="wrap" w="100%" h="192px">
        <MenuBar />
      </Flex>

      <TabsNav />

      <VStack divider={<StackDivider borderColor="gray.200" />}>
        <Cards />
        <Cards />
        <Cards />
      </VStack>
    </VStack>
  );
};

export default Layout;
