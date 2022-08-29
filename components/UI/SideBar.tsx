import { Box } from "@chakra-ui/react";
import React from "react";

export default function SideBar() {
  return (
    <>
      <Box w="48px" h="952px" bg="#333333" pos={"absolute"} left={0} />
      <Box w="368px" h="952px" bg="#333333" pos={"absolute"} right={0} />
    </>
  );
}
