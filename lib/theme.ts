import { makeTheme } from "@theme-ui/css/utils";

export const theme = makeTheme({
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true
  },

  colors: {
    text: "#000",
    background: "#12192C",
    primary: "#fff",
    secondary: "#6688FF",
    modes: {
      dark: {
        text: "#fff",
        background: "#12192C",
        primary: "#fff",
        secondary: "#6688FF"
      }
    }
  },
  fonts: {
    body: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Ubuntu,sans-serif"
  },
  radii: [0, 4],
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading"
    },
    display: {
      fontWeight: "lighter",
      lineHeight: "1.5",
      fontSize: 18,
      letterSpacing: 1
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "caps"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      backgroundImage: "url(/assets/bg.png)",
      backgroundPosition: "top,center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      maxWidth: 1920
    },
    a: {
      color: "primary",
      fontWeight: "lighter",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline"
      }
    },
    section: {
      paddingTop: 30,
      paddingBottom: 30,
      maxWidth: 1190,
      margin: "auto",
      mt: 50,
      width: "100%"
    },

    img: {
      backgroundRepeat: "no-repeat",
      backgroundImage: "none",
      backgroundSize: "contain",
      backgroundColor: "transparent"
    }
  },

  buttons: {
    primary: {
      cursor: "pointer"
    }
  },
  links: {
    nav: {
      fontWeight: "lighter",
      ":hover": {
        color: "secondary",
        fontWeight: "500"
      }
    }
  },
  sizes: {
    container: 1010
  }
});
