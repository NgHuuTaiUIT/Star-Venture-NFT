/** @jsxImportSource theme-ui */

import Image from "next/image";
import React from "react";
import { Box, Flex, Link } from "theme-ui";
import Section from "../Section/Section";
import { Discord, Medium, Telegram, Twitter } from "../SVG/Icon";
import {
  footerContainer,
  footerStyle,
  iconStyle,
  iconWrapStyle,
  lineStyle,
  svgStyle,
  titleStyle
} from "./style";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Section optLg={[0, 0, 0, 0]} as={"footer"} styles={footerContainer}>
      <Flex sx={footerStyle}>
        <Box as="h2" sx={titleStyle}>
          star venture
        </Box>
        <Box sx={lineStyle} />
        <p
          sx={{
            m: "1.7rem 2rem 0px",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "18px",
            lineHeight: "27px",
            textAlign: "center",
            fontFeatureSettings: "'liga' off"
          }}>
          Whitepaper
        </p>
        <h4 sx={{ m: "5px", mb: "0.8rem" }}>Follow us on social media</h4>
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
    url: "https://twitter.com/StarVentureGame",
    svg: <Twitter className={svgStyle} />
  },
  {
    src: "/assets/icons/discord.svg",
    url: "https://discord.com/",
    svg: <Discord className={svgStyle} />
  },
  {
    src: "/assets/icons/telegram.svg",
    url: "https://t.me/StarVentureGlobal",
    svg: <Telegram className={svgStyle} />
  },
  {
    src: "/assets/icons/medium.svg",
    url: "https://starventure.medium.com/",
    svg: <Medium className={svgStyle} />
  }
];

const Icons = () => (
  <Flex sx={iconWrapStyle}>
    {icons.map(({ src, url, svg }) => (
      <Link href={url} target="_blank" key={src} sx={iconStyle}>
        {/* <Image src={src} alt="icon" height={33} width={40} objectFit={"fill"} /> */}
        {svg}
      </Link>
    ))}
  </Flex>
);

export default Footer;
