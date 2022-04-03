/** @jsxImportSource theme-ui */
import { type } from "os";
import React, { FunctionComponent } from "react";
import { Box, Button, Flex, NavLink } from "theme-ui";

let uris: string[] = [
  "/assets/icons/twitter.svg",
  "/assets/icons/discord.svg",
  "/assets/icons/tele.svg",
  "/assets/icons/medium.svg"
];

const Navbar = () => {
  return (
    <Flex as="nav" sx={{ justifyContent: "space-between" }}>
      <LeftMenu />
      <RightMenu />
    </Flex>
  );
};

const LeftMenu = () => (
  <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
    <NavLink
      href="#!"
      p={2}
      sx={{
        display: "tableCell",
        verticalAlign: "middle",
        width: 120
      }}>
      Trailer
    </NavLink>
    <NavLink
      href="#!"
      p={2}
      sx={{
        display: "tableCell",
        verticalAlign: "middle",
        width: 120
      }}>
      Feature
    </NavLink>
    <NavLink
      href="#!"
      p={2}
      sx={{
        display: "tableCell",
        verticalAlign: "middle",
        width: 120
      }}>
      Collection
    </NavLink>
    <NavLink
      href="#!"
      p={2}
      sx={{
        display: "tableCell",
        verticalAlign: "middle",
        width: 120
      }}>
      Roadmap
    </NavLink>
    <NavLink
      href="#!"
      p={2}
      sx={{
        display: "tableCell",
        verticalAlign: "middle",
        width: 120
      }}>
      Team
    </NavLink>
  </Flex>
);

const RightMenu = () => (
  <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
    <Box sx={{ maxHeight: 16, mr: 32 }}>
      <img src="/assets/icons/twitter.svg" alt="next" />
    </Box>
    <Box sx={{ maxHeight: 16, mr: 32 }}>
      <img src="/assets/icons/discord.svg" alt="next" />
    </Box>
    <Box sx={{ maxHeight: 16, mr: 32 }}>
      <img src="/assets/icons/tele.svg" alt="next" />
    </Box>
    <Box sx={{ maxHeight: 16, mr: 32 }}>
      <img src="/assets/icons/medium.svg" alt="next" />
    </Box>
    <Button sx={{ width: 178 }}>Connect Wallet</Button>
  </Flex>
);

const Icon: React.FC<string> = uri => (
  <Box sx={{ maxHeight: 16, mr: 32 }}>
    <img src={uri} alt="next" />
  </Box>
);
export default Navbar;
