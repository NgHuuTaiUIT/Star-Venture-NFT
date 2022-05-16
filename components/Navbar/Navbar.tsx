/** @jsxImportSource theme-ui */
import disableScroll from "disable-scroll";
import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Image, Link, NavLink } from "theme-ui";
import { MenuContext } from "../../context/MenuProvider";
import { ScrollToSectionContext } from "../../context/ScrollToSectionProvider";
import { useWindowSize } from "../../hooks/useWindowSize";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import { Discord, Medium, Telegram, Twitter } from "../SVG/Icon";

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
  "/assets/icons/telegram.svg",
  "/assets/icons/medium.svg"
];

const menus: string[] = ["Trailer", "Feature", "Collection", "Roadmap", "Team"];

const Navbar = () => {
  const { showMenu, openMenu, closeMenu } = useContext(MenuContext);
  const { width } = useWindowSize();

  // useEffect(() => {
  //   if (width < 980) {
  //     showMenu ? disableScroll.on() : disableScroll.off();
  //   } else {
  //     disableScroll.off();
  //     closeMenu();
  //   }
  // }, [closeMenu, showMenu, width]);

  return (
    <Box
      as="header"
      sx={{
        position: ["sticky"],
        width: "100%",
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
          p={2}
          sx={{
            ...linkStyle,
            color: sectionActive === idx && "secondary"
          }}
          onClick={() => {
            scrollContext.scrollEffect(refs[idx]);
            setSectionActive(idx);
          }}>
          {menu}
          {sectionActive == idx && (
            <Box sx={{ display: ["block", , , "none"] }}>
              <Line />
            </Box>
          )}
        </NavLink>
      ))}
      <Box sx={{ display: ["none", , , "block"] }}>
        <Line activeIndex={Number.parseInt(sectionActive)} />
      </Box>
    </Flex>
  );
};

const icons = [
  {
    // src: "/assets/icons/twitter.svg",
    src: <Twitter />,

    url: "https://twitter.com/StarVentureGame"
  },
  {
    // src: "/assets/icons/discord.svg",
    src: <Discord />,
    url: "#"
  },
  {
    //  src: "/assets/icons/telegram.svg"
    src: <Telegram />,
    url: "https://t.me/StarVentureGlobal"
  },
  {
    // src: "/assets/icons/medium.svg",
    src: <Medium />,

    url: "https://t.me/starventure"
  }
];

const RightMenu = () => (
  <Flex sx={wrapRightMenuStyle}>
    {icons.map(({ src, url }) => (
      <Link href={url} target="_blank" key={url} sx={iconStyle}>
        {/* <Image src={src} alt="next" /> */}
        {src}
      </Link>
    ))}
  </Flex>
);

const Line = ({ activeIndex }: { activeIndex?: number }): JSX.Element => (
  <>
    <Box
      sx={{
        ...lineStyle,
        left: `calc(60px + ${activeIndex && activeIndex * 120}px)`,
        display: ["none", , , "block"]
      }}
    />
    <Box sx={{ ...lineStyle, left: "50%", display: ["block", , , "none"] }} />
  </>
);

export default Navbar;
