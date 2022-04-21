/** @jsxImportSource theme-ui */
import disableScroll from "disable-scroll";
import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Image, Link, NavLink } from "theme-ui";
import { MenuContext } from "../../context/MenuProvider";
import { ScrollToSectionContext } from "../../context/ScrollToSectionProvider";
import { useWindowSize } from "../../hooks/useWindowSize";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import {
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

  useEffect(() => {
    if (width < 980) {
      showMenu ? disableScroll.on() : disableScroll.off();
    } else {
      disableScroll.off();
      closeMenu();
    }
  }, [width]);

  return (
    <Box
      as="header"
      sx={{
        position: ["sticky"],
        width: "100vw",
        top: 0,
        zIndex: 2
      }}>
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
      <Flex
        sx={{
          ...containerNavbarStyle,
          display: width >= 1024 ? "block" : showMenu ? "block" : "none"
        }}>
        <Flex as="nav" sx={wrapNavbarStyle}>
          <LeftMenu />
          <RightMenu />
          <CustomWalletMultiButton />
        </Flex>
      </Flex>
    </Box>
  );
};

const LeftMenu = () => {
  // const [active, setActive] = useState(0);

  const scrollContext = useContext(ScrollToSectionContext);

  const { sectionActive, setSectionActive } = scrollContext;

  const refs = Object.values(scrollContext);

  return (
    <Flex sx={wrapLeftMenuStyle}>
      {menus.map((menu, idx) => (
        <NavLink
          key={menu}
          href="#!"
          p={2}
          sx={{
            ...linkStyle,
            fontWeight: sectionActive === idx ? "500" : 200,
            color: sectionActive === idx ? "secondary" : "primary"
          }}
          onClick={() => {
            scrollContext.scrollEffect(refs[idx]);
            setSectionActive(idx);
          }}>
          {menu}
          {sectionActive == idx && <Line />}
        </NavLink>
      ))}
    </Flex>
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

const RightMenu = () => (
  <Flex sx={wrapRightMenuStyle}>
    {icons.map(({ src, url }) => (
      <Link href={url} target="_blank" key={src} sx={iconStyle}>
        <Image src={src} alt="next" />
      </Link>
    ))}
  </Flex>
);

const Line = () => (
  <Box sx={lineStyle}>
    {/* <Image src="/assets/images/line.svg" alt="next" /> */}
  </Box>
);

export default Navbar;
