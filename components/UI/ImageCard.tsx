import { Box, BoxProps, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import ImageCardMenuIcon from "../Icons/ImageCardMenu";

interface Props extends BoxProps {
  id: string
  children?: ReactNode;
}

function ImageCard(props: Props) {
  const { id, children, ...rest } = props;

  return (
    <Link href={`/viewer/${id}`}>
      <Box w="176px" h="176" bg="#D9D9D9" {...rest} pos="relative" cursor={"pointer"}>
        <Menu>
          <MenuButton as={Button}
            pos="absolute"
            right={0}
            color="yellow"
            fontWeight={700}
            fontSize={"md"}
            variant="none">
            <ImageCardMenuIcon />
          </MenuButton>
          <MenuList zIndex={3}>
            <MenuItem>image Card menu 1</MenuItem>
            <MenuItem>image Card menu 2</MenuItem>
          </MenuList>
        </Menu>
        {children}
      </Box>
    </Link>
  );
}

export default ImageCard;
