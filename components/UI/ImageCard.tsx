import { Box, BoxProps, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import ImageCardMenuIcon from "../Icons/ImageCardMenu";

interface Props extends BoxProps {
  id: string;
  children?: ReactNode;
}

function ImageCard(props: Props) {
  const { id, children, ...rest } = props;
  const router = useRouter();
  const navigateToEditor = () => {
    router.push(`/editor/${id}`);
  };

  return (
    <Box bg="#D9D9D9" {...rest} pos="relative">
      <Menu>
        <MenuButton as={Button} pos="absolute" right={0} variant="none">
          <ImageCardMenuIcon />
        </MenuButton>
        <MenuList zIndex={3}>
          <MenuItem>favourite</MenuItem>
          <MenuItem onClick={navigateToEditor}>edit</MenuItem>
          <MenuItem>variance</MenuItem>
          <MenuItem>upscale</MenuItem>
        </MenuList>
      </Menu>
      {children}
    </Box>
  );
}

export default ImageCard;
