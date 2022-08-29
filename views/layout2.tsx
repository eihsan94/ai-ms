import { Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import EditorMenu from "../components/Navigate/EditorMenu";

interface Props {
  children?: ReactNode;
}
const Layout2: FC<Props> = ({ children }) => {
  return (
    <>
      <EditorMenu />
      <Container maxW="7xl">{children}</Container>
    </>
  );
};

export default Layout2;
