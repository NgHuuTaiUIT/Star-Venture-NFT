/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Flex, Link } from "theme-ui";
import Section from "../Section/Section";
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
    <Section optLg={[0, 0, 1, 0]}>
      <Flex as="footer" sx={footerStyle}>
        <Box as="h2" sx={titleStyle}>
          star venture
        </Box>
        <Box sx={lineStyle} />
        <p sx={{ m: "16px 25px 0px" }}>White paper</p>
        <h4 sx={{ m: "3px" }}>Follow us on social media</h4>
        <Icons />
        <p sx={{ color: "secondary", fontSize: "smaller", mb: 50 }}>
          ©2021 Star Venture, All Rights Reserved
        </p>
      </Flex>
    </Section>
  );
};

const icons = [
  {
    src: "/assets/icons/twitter.svg",
    url: "https://twitter.com/StarVentureGame"
  },
  {
    src: "/assets/icons/discord.svg",
    url: "#"
  },
  { src: "/assets/icons/tele.svg", url: "https://t.me/StarVentureGlobal" },
  { src: "/assets/icons/medium.svg", url: "https://t.me/starventure" }
];

const Icons = () => (
  <Flex sx={iconWrapStyle}>
    {icons.map(({ src, url }) => (
      <Link href={url} target="_blank" key={src} sx={iconStyle}>
        <img src={src} alt="icon" />
      </Link>
    ))}
  </Flex>
);

export default Footer;
