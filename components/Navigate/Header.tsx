import { Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../UI/NavBar";
import SearchBar from "../UI/SearchBar";

export default function Header() {
  return (
    <>
      <NavBar />
      <Flex justifyContent={"center"} bgColor={"white"} bg="#444444">
        <SearchBar />
      </Flex>
    </>
  );
}
