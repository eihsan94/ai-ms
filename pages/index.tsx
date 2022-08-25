import {
  Box,
  Button,
  Heading,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import theme from "../styles/theme";

const Home: NextPage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px");

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack alignItems="flex-start" h={3}>
        <Heading w={393} h={131} size="4xl" fontWeight="bold" color="#000000">
          MARBLE
        </Heading>
        <Text top={136} fontSize="xl" fontWeight="bold">
          AI Image generator for multi language
        </Text>
      </VStack>

      <Box alignSelf="center" pos="fixed" bottom={86}>
        <Button
          roundedLeft="0"
          roundedRight="0"
          fontWeight="700"
          size="20"
          w={350}
          h={58}
          bg={"#000000"}
          color={"#FFFFFF"}
          _hover={{
            bg: "gray.400",
          }}
        >
          Apply Beta Waiting List
        </Button>
      </Box>
    </VStack>
  );
};

export default Home;
