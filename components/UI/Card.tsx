import { Box, BoxProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
}

function Card(props: Props) {
  const { children, ...rest } = props;

  return (
    <>
      <Box w="176px" h="176" bg="#D9D9D9" {...rest}>
        {children}
      </Box>
    </>
  );
}

export default Card;
