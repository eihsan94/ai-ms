import { Box, Container, Link } from "@chakra-ui/react";
import React from "react";
import SideBar from "../UI/SideBar";

export default function EditorMenu() {
  return (
    <Box w="100%" h="10" bg="#333333">
      <Container maxW="7xl">
        <Link href="/" color="white" fontWeight={700} fontSize={24} flex={1}>
          SERVICE PROTOTYPE
        </Link>
        <SideBar />
      </Container>
    </Box>
  );
}
