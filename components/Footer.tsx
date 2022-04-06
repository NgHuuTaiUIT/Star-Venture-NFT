/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Flex } from "theme-ui";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Flex
      sx={{
        maxWidth: ["calc(100vw - 40px)", , , 500],
        m: "auto",
        mt: -25,
        flexDirection: ["column"],
        gap: [20, , , 10],
        textAlign: "center"
      }}>
      <Box
        as="h2"
        sx={{
          fontFamily: "roadmap",
          letterSpacing: 1.5,
          fontWeight: 500,
          fontSize: [56, , , 28]
        }}>
        star venture
      </Box>
      <Box
        sx={{
          background: "#464D94",
          height: 2,
          minWidth: ["100%", , , "80%"]
        }}
      />
      <p sx={{ m: "10px 20px 0px" }}>White paper</p>
      <h4 sx={{ m: "5px" }}>Follow us on social media</h4>
      <Icons />
      <p sx={{ color: "secondary", fontSize: "smaller", mb: 50 }}>
        ©2021 Star Venture, All Rights Reserved
      </p>
    </Flex>
  );
};

const Icons = () => (
  <Flex
    sx={{
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "100%"
    }}>
    <Box sx={{ maxHeight: 50, height: "1.8em", mx: 16 }}>
      <img height={"100%"} src="/assets/icons/twitter.svg" alt="next" />
    </Box>
    <Box sx={{ maxHeight: 50, height: "1.8em", mx: 16 }}>
      <img height={"100%"} src="/assets/icons/discord.svg" alt="next" />
    </Box>
    <Box sx={{ maxHeight: 50, height: "1.8em", mx: 16 }}>
      <img height={"100%"} src="/assets/icons/tele.svg" alt="next" />
    </Box>
    <Box sx={{ maxHeight: 50, height: "1.8em", mx: 16 }}>
      <img height={"100%"} src="/assets/icons/medium.svg" alt="next" />
    </Box>
  </Flex>
);

export default Footer;
