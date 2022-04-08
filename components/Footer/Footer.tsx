/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Flex } from "theme-ui";
import {
  footerStyle,
  iconStyle,
  iconWrapStyle,
  lineStyle,
  titleStyle
} from "./style";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Flex sx={footerStyle}>
      <Box as="h2" sx={titleStyle}>
        star venture
      </Box>
      <Box sx={lineStyle} />
      <p sx={{ m: "10px 20px 0px" }}>White paper</p>
      <h4 sx={{ m: "5px" }}>Follow us on social media</h4>
      <Icons />
      <p sx={{ color: "secondary", fontSize: "smaller", mb: 50 }}>
        ©2021 Star Venture, All Rights Reserved
      </p>
    </Flex>
  );
};

const icons = [
  "/assets/icons/twitter.svg",
  "/assets/icons/discord.svg",
  "/assets/icons/tele.svg",
  "/assets/icons/medium.svg"
];

const Icons = () => (
  <Flex sx={iconWrapStyle}>
    {icons.map(src => (
      <Box key={src} sx={iconStyle}>
        <img src={src} alt="icon" />
      </Box>
    ))}
  </Flex>
);

export default Footer;
