import React from "react";
import logo from "C:/Users/LENOVO/Desktop/Prog.Ass/mylittlelemon/src/images/logo.png";
import Navigation from "../Pages/Navigation";
import { Helmet } from "react-helmet";
import { Box, Flex, Grid, HStack, Image } from "@chakra-ui/react";

function Header() {
  const handldeLogo = () => {
    <a href="/HomePage"></a>;
  };
  return (
    <header>
      <HStack
        spacing={100}
        align="center"
        justify="center"
        minWidth="fit-content"
        maxWidth="100%"
        margin={"1%"}
      >
        <Box onClick={handldeLogo}>
          <Image src={logo} alt="The logo of little lemon" />
        </Box>
        <Navigation />
      </HStack>
    </header>
  );
}

export default Header;
