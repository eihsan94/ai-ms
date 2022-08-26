import { Box, Link } from "@chakra-ui/react";
import React from "react";

export default function Head() {
  return (
    <Box w="100%" h="10" bg="#333333">
      <Link
        href="/"
        color="white"
        fontWeight={700}
        fontSize={24}
        marginLeft={125}
      >
        PLESE-AI
      </Link>
      <Link
        color="yellow"
        fontWeight={700}
        fontSize={"md"}
        pos="absolute"
        right={25}
      >
        Auto Translation
      </Link>
    </Box>
  );
}
