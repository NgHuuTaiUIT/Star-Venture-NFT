/** @jsxImportSource theme-ui */
import { themed } from "@theme-ui/mdx";
import Link from "next/link";
import { type } from "os";
import React, { FunctionComponent, useState } from "react";
import { Box, Button, Flex, NavLink, Themed } from "theme-ui";

const uris: string[] = [
  "/assets/icons/twitter.svg",
  "/assets/icons/discord.svg",
  "/assets/icons/tele.svg",
  "/assets/icons/medium.svg"
];

const menus: string[] = ["Trailer", "Feature", "Collection", "Roadmap", "Team"];

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        background:
          "linear-gradient(0deg, rgba(18,25,44,0) 0%, rgba(18,25,44,1) 100%)",
        zIndex: 99
      }}>
      <Flex
        as="nav"
        sx={{
          pt: 14,
          borderRadius: 1,
          mx: "auto",
          maxWidth: 1190,
          justifyContent: "space-between",
          backgroundColor: "transparent",
          px: 3
        }}>
        <LeftMenu />
        <RightMenu />
      </Flex>
    </Box>
  );
};

const LeftMenu = () => {
  const [active, setActive] = useState(0);
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        ml: 24,
        height: "100%"
      }}>
      {menus.map((menu, idx) => (
        <NavLink
          key={menu}
          href="#!"
          p={2}
          sx={{
            width: 120,
            height: 50,
            fontSize: 18,
            transition: "font-weight,color 0.5s",
            fontWeight: active === idx ? "500" : 200,
            color: active === idx ? "secondary" : "primary",
            textAlign: "center",
            // letterSpacing: 2
            position: "relative"
          }}>
          {menu}
          {active == idx && <Line />}
        </NavLink>
      ))}
    </Flex>
  );
};

const RightMenu = () => (
  <Flex
    sx={{
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      mt: -1
    }}>
    <Flex sx={{ mr: 30 }}>
      <Box sx={{ maxHeight: 16, mx: 16 }}>
        <img src="/assets/icons/twitter.svg" alt="next" />
      </Box>
      <Box sx={{ maxHeight: 16, mx: 16 }}>
        <img src="/assets/icons/discord.svg" alt="next" />
      </Box>
      <Box sx={{ maxHeight: 16, mx: 16 }}>
        <img src="/assets/icons/tele.svg" alt="next" />
      </Box>
      <Box sx={{ maxHeight: 16, mx: 16, pr: 15 }}>
        <img src="/assets/icons/medium.svg" alt="next" />
      </Box>
    </Flex>
    <Button sx={{ width: 178, background: "secondary", py: 1, mt: 10, mr: 2 }}>
      Connect Wallet
    </Button>
  </Flex>
);

const Line = () => (
  <Box sx={{ position: "absolute", bottom: -12 }}>
    <img src="/assets/images/line.svg" alt="next" />
  </Box>
);

export default Navbar;
