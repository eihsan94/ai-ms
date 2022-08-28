import { Box, Button, Flex, FormLabel, IconButton, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GearIcon from "../Icons/Gear";

interface Props { }

function SearchBar(props: Props) {
  const { } = props;
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [steps, setSteps] = useState(0)
  const menuContents = [
    { label: "width", val: width, mutateFn: setWidth },
    { label: "height", val: height, mutateFn: setHeight },
    { label: "steps", val: steps, mutateFn: setSteps },
  ]
  return (
    <Box py="16" w="100%" maxW={"1250px"}>
      <InputGroup w="100%">
        <Input
          roundedLeft="15"
          roundedRight="15"
          w="100%"
          h={10}
          fontSize="16px"
          bg="white"
          textColor="#000000"
          _placeholder={{ opacity: 1, color: "inherit" }}
          placeholder="Landscape painting of forest and castle in the style of realism"
        />
        <InputRightElement w="fit-content" justifyContent={"flex-end"}>
          <Text
            fontWeight="500"
            fontSize="16px"
            lineHeight="22px"
            color="#CCCCCC"
          >
            W:{width} H:{height} S:{steps}
          </Text>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<GearIcon />}
              variant="none"
            />
            <MenuList bg="black" color="white" border="none" w="320px" p="0px" >
              {
                menuContents.map(({ label, val, mutateFn }, i) =>
                  <SimpleGrid columns={[2]} key={i} p="16px">
                    <Flex align="center">
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="22px"
                      >
                        {label}
                      </Text>
                    </Flex>
                    <Input onChange={(e) => mutateFn(parseInt(e.target.value))} type="number" border="1px solid rgba(255, 255, 255, 0.2)" borderRadius={"none"} color={"white"} value={val} />
                  </SimpleGrid>
                )
              }
            </MenuList>
          </Menu>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
