import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

interface Props {}

function SearchBar(props: Props) {
  const {} = props;

  return (
    <Box alignSelf="center" px="32" py="16">
      <Input
        roundedLeft="15"
        roundedRight="15"
        w={1136}
        h={10}
        bg="white"
        textColor="#000000"
        _placeholder={{ opacity: 1, color: "inherit" }}
        placeholder="Landscape painting of forest and castle in the style of realism"
      />
    </Box>
  );
}

export default SearchBar;
