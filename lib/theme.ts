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
    heading: "sans-serif"
  },
  radii: [0, 4],

  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      background: "url(/assets/bg.png)",
      backgroundPosition: "top,center"
    },
    a: {
      color: "primary",
      fontWeight: "lighter",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline"
      }
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
  }
});
