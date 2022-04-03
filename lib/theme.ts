import { makeTheme } from "@theme-ui/css/utils";

export const theme = makeTheme({
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true
  },

  colors: {
    text: "#000",
    background: "#12192C",
    primary: "#07c",
    secondary: "#6688FF",
    modes: {
      dark: {
        text: "#fff",
        background: "#12192C",
        primary: "#0cf",
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
      p: 2
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
        fontWeight: "bold"
      }
    }
  }
});
