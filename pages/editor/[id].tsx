import { VStack } from "@chakra-ui/react";
import React from "react";
import ImageCard from "../../components/UI/ImageCard";
import SearchBar from "../../components/UI/SearchBar";
import Layout2 from "../../views/layout2";

interface Props {}

function Editor(props: Props) {
  const {} = props;

  return (
    <Layout2>
      <VStack paddingTop={"100px"}>
        <ImageCard id="1" w="512px" h="512px" />
        <SearchBar />
      </VStack>
    </Layout2>
  );
}

export default Editor;
