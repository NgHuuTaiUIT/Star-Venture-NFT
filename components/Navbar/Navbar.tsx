/** @jsxImportSource theme-ui */
import { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, Image, Link, NavLink } from "theme-ui";
import { MenuContext } from "../../context/MenuProvider";
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
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
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
    if (width < 1200) {
      showMenu ? disableScroll.on() : disableScroll.off();
    } else {
      disableScroll.off();
      closeMenu();
    }
  }, [width]);
  return (
    <Box as="header">
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
              display: "flex",
              justifyContent: ["center", , , "start"],
              flexWrap: "nowrap",
              alignItems: "center",
              flex: "0 0 25%",
              width: ["100%", , "85%"],
              m: "auto"
            }}>
            {/* <Button sx={btnConnectStyle}>Connect Wallet</Button> */}
            <WalletMultiButton sx={btnConnectStyle}></WalletMultiButton>
          </Box>
        </Flex>
      </Box>
    </Box>
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
