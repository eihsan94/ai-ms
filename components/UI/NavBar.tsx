import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Container,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
}

export default function NavBar(props: Props) {
  const { children } = props;
  const [credit, setCredit] = useState(1000.0);
  return (
    <Box w="100%" h="10" bg="#333333">
      <Container maxW="7xl">
        <HStack>
          <Link href="/" color="white" fontWeight={700} fontSize={24} flex={1}>
            PLESE-AI
          </Link>
          <Text
            fontWeight="700"
            fontSize="16px"
            lineHeight="22px"
            color="#FFFFFF"
          >
            {credit.toFixed(2)} credit
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              pr="0"
              color="yellow"
              fontWeight={700}
              fontSize={"md"}
              rightIcon={<ChevronDownIcon />}
              variant="none"
            >
              Auto Translation
            </MenuButton>
            <MenuList zIndex={3}>
              <MenuItem>translation menu 1</MenuItem>
              <MenuItem>translation menu 2</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} p="0" variant="iconButton">
              <Avatar size={"xs"} src="https://bit.ly/broken-link" />
            </MenuButton>
            <MenuList zIndex={3}>
              <MenuItem>avatar menu 1</MenuItem>
              <MenuItem>avatar menu 2</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
}
