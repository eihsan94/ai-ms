import { Flex, VStack, StackDivider, HStack, Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Header from "../components/Navigate/Header";

interface Props {
  children?: ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW="7xl">
        {children}
      </Container>
    </>
  );
};

export default Layout;
