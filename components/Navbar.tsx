/** @jsxImportSource theme-ui */
import { useContext, useState } from "react";
import { Box, Button, Flex, Image, NavLink } from "theme-ui";
import { MenuContext } from "../context/MenuContext";
import disableScroll from "disable-scroll";
const uris: string[] = [
  "/assets/icons/twitter.svg",
  "/assets/icons/discord.svg",
  "/assets/icons/tele.svg",
  "/assets/icons/medium.svg"
];

const menus: string[] = ["Trailer", "Feature", "Collection", "Roadmap", "Team"];

const Navbar = () => {
  const { showMenu, openMenu, closeMenu } = useContext(MenuContext);
  showMenu ? disableScroll.on() : disableScroll.off();
  return (
    <>
      <Box
        as="a"
        sx={{
          display: ["block", , , "none"],
          position: "fixed",
          right: "10%",
          top: "4%",
          backgroundImage: showMenu
            ? "url(/assets/images/menu-active.svg)"
            : "url(/assets/images/menu.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "transparent",
          height: [40],
          width: [40],
          cursor: "pointer",
          transform: "scale(2)",
          zIndex: 9999
        }}
        onClick={openMenu}
      />
      <Box
        sx={{
          opacity: showMenu ? 1 : 0,
          visibility: showMenu ? "visible" : "hidden",
          position: "fixed",
          width: "100%",
          height: ["100%", , , "auto"],
          py: ["20%", , , 0],
          background:
            "linear-gradient(0deg, rgba(18,25,44,0) 0%, rgba(18,25,44,1) 100%)",
          zIndex: 999
        }}>
        <Flex
          as="nav"
          sx={{
            height: ["100%", , , "auto"],
            flexDirection: ["column", "column", , "row"],
            pt: 14,
            borderRadius: 1,
            mx: "auto",
            maxWidth: "80%",
            justifyContent: ["center", , , "space-between"],
            alignItems: "center",
            backgroundColor: "transparent",
            px: 3
          }}>
          <LeftMenu />
          <RightMenu />
          <Box
            sx={{
              flex: "0 0 25%",
              width: "100%",
              m: "auto"
            }}>
            <Button
              sx={{
                width: ["100%", , , 178],
                background: "secondary",
                py: [52, , , 1],
                mt: [80, , , 0],
                ml: [0, , , 25],
                fontSize: ["1.8rem", , , "1rem"],
                borderRadius: 10
              }}>
              Connect Wallet
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const LeftMenu = () => {
  const [active, setActive] = useState(0);
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", , "row"],

        justifyContent: ["space-between", , , "center"],
        alignItems: "center",
        ml: 24,
        height: "100%",
        flex: "0 0 60%"
      }}>
      {menus.map((menu, idx) => (
        <NavLink
          key={menu}
          href="#!"
          p={2}
          sx={{
            width: ["100%", , , 120],
            height: 50,
            fontSize: ["1.8rem", , , "1rem"],
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
      justifyContent: ["space-evenly"],
      alignItems: "center",
      height: "100%",
      width: "100%",
      m: "0 auto",
      minHeight: [50]
    }}>
    <Box
      sx={{
        maxHeight: ["100%", , , 50],
        mx: 16,
        transform: ["scale(5)", , , "scale(1)"]
      }}>
      <img src="/assets/icons/twitter.svg" alt="next" />
    </Box>
    <Box
      sx={{
        maxHeight: ["100%", , , 50],
        mx: 16,
        transform: ["scale(5)", , , "scale(1)"]
      }}>
      <img src="/assets/icons/discord.svg" alt="next" />
    </Box>
    <Box
      sx={{
        maxHeight: ["100%", , , 50],
        mx: 16,
        transform: ["scale(5)", , , "scale(1)"]
      }}>
      <img src="/assets/icons/tele.svg" alt="next" />
    </Box>
    <Box
      sx={{
        maxHeight: ["100%", , , 50],
        mx: 16,
        transform: ["scale(5)", , , "scale(1)"],
        pr: 15
      }}>
      <img src="/assets/icons/medium.svg" alt="next" />
    </Box>
  </Flex>
);

const Line = () => (
  <Box
    sx={{
      position: "absolute",
      bottom: ["-100%", , , -20],
      width: ["100%"],
      height: "100%",
      transform: ["scale(4)", , , "scale(1)"]
    }}>
    <Image src="/assets/images/line.svg" alt="next" />
  </Box>
);

export default Navbar;
