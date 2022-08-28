import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Card from "../UI/Card";

export default function Cards() {
  return (
    <Box>
      <HStack spacing={5} align="stretch">
        <Card _hover={{ bg: "blue.100" }} />
        <Card _hover={{ bg: "blue.100" }} />
        <Card _hover={{ bg: "blue.100" }} />
        <Card _hover={{ bg: "blue.100" }} />
      </HStack>
      <Text>
        Landscape painting of forest and castle in the style of realism
      </Text>
    </Box>
  );
}
