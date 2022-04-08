/** @jsxImportSource theme-ui */
import { useContext, useState } from "react";
import { Box, Button, Flex, Image, NavLink } from "theme-ui";
import { MenuContext } from "../../context/MenuContext";
import disableScroll from "disable-scroll";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  btnConnectStyle,
  btnMenuMobileStyle,
  containerNavbarStyle,
  iconStyle,
  lineStyle,
  linkStyle,
  wrapLeftMenuStyle,
  wrapNavbarStyle,
  wrapRightMenuStyle
} from "./style";
const uris: string[] = [
  "/assets/icons/twitter.svg",
  "/assets/icons/discord.svg",
  "/assets/icons/tele.svg",
  "/assets/icons/medium.svg"
];

const menus: string[] = ["Trailer", "Feature", "Collection", "Roadmap", "Team"];

const Navbar = () => {
  const { showMenu, openMenu, closeMenu } = useContext(MenuContext);
  const { width } = useWindowSize();
  showMenu ? disableScroll.on() : disableScroll.off();
  return (
    <>
      <Box
        as="a"
        sx={{
          ...btnMenuMobileStyle,
          backgroundImage: showMenu
            ? "url(/assets/images/menu-active.svg)"
            : "url(/assets/images/menu.svg)"
        }}
        onClick={openMenu}
      />
      <Box
        sx={{
          opacity: width >= 1200 ? 1 : showMenu ? 1 : 0,
          visibility:
            width >= 1200 ? "visible" : showMenu ? "visible" : "hidden",
          ...containerNavbarStyle
        }}>
        <Flex as="nav" sx={wrapNavbarStyle}>
          <LeftMenu />
          <RightMenu />
          <Box
            sx={{
              flex: "0 0 25%",
              width: ["100%", , "85%"],
              m: "auto"
            }}>
            <Button sx={btnConnectStyle}>Connect Wallet</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const LeftMenu = () => {
  const [active, setActive] = useState(0);
  return (
    <Flex sx={wrapLeftMenuStyle}>
      {menus.map((menu, idx) => (
        <NavLink
          key={menu}
          href="#!"
          p={2}
          sx={{
            ...linkStyle,
            fontWeight: active === idx ? "500" : 200,
            color: active === idx ? "secondary" : "primary"
          }}>
          {menu}
          {active == idx && <Line />}
        </NavLink>
      ))}
    </Flex>
  );
};

const icons = [
  "/assets/icons/twitter.svg",
  "/assets/icons/discord.svg",
  "/assets/icons/tele.svg",
  "/assets/icons/medium.svg"
];

const RightMenu = () => (
  <Flex sx={wrapRightMenuStyle}>
    {icons.map(src => (
      <Box key={src} sx={iconStyle}>
        <img src={src} alt="next" />
      </Box>
    ))}
  </Flex>
);

const Line = () => (
  <Box sx={lineStyle}>
    {/* <Image src="/assets/images/line.svg" alt="next" /> */}
  </Box>
);

export default Navbar;
