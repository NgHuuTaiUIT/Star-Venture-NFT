import { backgroundStyle } from "./../components/Modal/styles";
import { makeTheme } from "@theme-ui/css/utils";

export const theme = makeTheme({
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true
  },
  breakpoints: ["480px", "980px", "1200px"],
  // breakpoints: ["40em", "52em", "64em", "76em", "88em"],
  colors: {
    primary: "#fff",
    secondary: "#6688FF",
    text: "#fff",
    background: "#12192C"
  },
  fonts: {
    body: "Ubuntu, sans-serif",
    heading: "Ubuntu,sans-serif",
    roadmap: "Pilot Command Regular"
  },
  // fontSizes: [18, 28],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: "30px",
    heading: "50px"
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px"
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container90: ["1190px"],
    container40: ["1140px"]
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ["15px", null, null, "30px"]
    },
    title: {
      margin: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain"
    },
    section: {
      py: 25,
      px: [16, null, null, null],
      maxWidth: "container90",
      margin: "auto",
      my: ["4rem", , , 50],
      width: ["100%"],
      lineHeight: [1.5]
    },
    features: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: ["1rem", , , 0],
      "@media only screen and (max-width: 1200px)": {
        gridTemplateColumns: "repeat(1, 1fr)",
        width: "calc(100% - 10px)",
        margin: "auto"
      }
    },
    collections: {
      display: "grid",
      gridTemplateRows: "1fr 1fr"
    },
    roadmap: {
      backgroundImage: "url(/assets/images/bg-roadmap.png)",
      "@media only screen and (max-width: 1200px)": {
        backgroundImage: "none"
      }
    },
    card: {
      minWidth: [580, 580, 580, 290, 290]
      // "@media(max-width: 980px)": {
      //   minWidth: "30%"
      // },
      // "@media only screen and (max-width: 768px)": {
      //   minWidth: "63%",
      //   mx: 0
      // }
    },
    header: {
      color: "#02073E",
      fontWeight: "normal",
      py: 30
    },
    toolbar: {
      display: "flex",
      alignItems: "center"
    },
    main: {
      minWidth: ["376px", "576px", "768px", "992px"]
    },
    footer: {
      backgroundColor: "background_secondary"
    }
  },
  popup: {
    xl: {
      background: "url(/assets/images/Popup.svg) no-repeat",
      minWidth: [957],
      minHeight: [573]
    },
    md: {
      background: "url(/assets/images/Popup.svg) no-repeat",
      backgroundSize: "contain",
      backgroundColor: "transparent",
      maxWidth: [685],
      minHeight: [419],
      m: "0 auto"
    }
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      letterSpacing: "heading",
      color: "heading"
    },
    p: {
      fontSize: ["1.3rem", , , "1rem"]
    },
    roadmap: {
      fontFamily: "roadmap",
      fontSize: [60, null, null, 30],
      whiteSpace: "pre-line"
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: "normal",
      lineHeight: ["40px", "80px"],
      letterSpacing: "-1px",
      textAlign: ["center", "left"]
    },
    title: {
      variant: "text.heading",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "30px",
      color: "#0F2137"
    },
    heroSecondary: {
      color: "text_secondary",
      lineHeight: ["30px", "42px"],
      letterSpacing: "0.1em",
      textAlign: ["center", "left"]
    },
    lead: {
      fontSize: 40,
      fontFamily: "DM Sans",
      fontWeight: "500",
      lineHeight: "60px",
      letterSpacing: "-1.5px",
      color: "#0F2137"
    },
    muted: {
      lineHeight: "26px",
      color: "muted"
    },
    secondary: {
      fontWeight: 500,
      color: "#00A99D",
      lineHeight: "40px"
    }
  },
  links: {
    bold: {
      fontWeight: "bold"
    },
    logo: {
      pr: 30,
      mb: "5px"
    },
    nav: {
      display: ["none", null, "inline-block"],
      p: 2,
      transition: "all 500ms",
      "&:hover": {
        color: "secondary",
        fontWeight: "500"
      }
    },
    footer: {
      display: "block",
      px: 0,
      color: "inherit",
      textDecoration: "none"
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  backgrounds: {
    full: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center"
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"]
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      // fontWeight: "bold",
      // color: "white",
      // bg: "primary",
      // cursor: "pointer",
      // transition: "500ms",
      // fontSize: 2,
      // "&:hover": {
      //   bg: "secondary"
      // }
    }
  },
  blockTitle: {
    marginBottom: [45, null, null, null, 70],
    p: {
      color: "primary",
      fontSize: [0, null, null, null, 3],
      lineHeight: 1,
      marginBottom: [10, null, null, null, 10]
    },
    h2: {
      color: "black",
      fontWeight: "bold",
      fontSize: [5, null, null, null, "32px", null, 7],
      lineHeight: [1.24, null, null, null, 1.83],
      letterSpacing: ["-1px", null, null, null, "-1.5px"]
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "lighter",
      fontSize: ["32px", "32px", "32px", "18px"],
      bg: "background",
      backgroundImage: [
        "url(/assets/images/bg-mb.png)",
        ,
        ,
        "url(/assets/images/bg.png)"
      ],
      backgroundPosition: "top,center",
      backgroundRepeat: "no-repeat",
      backgroundSize: ["cover"],
      margin: 0,
      height: "100%",
      // WebkitFontSmoothing: "antialiased",
      "@media(max-width: 479px)": {
        WebkitTextSizeAdjust: "100%"
      },
      "@font-face": {
        fontFamily: "Pilot Command Regular",
        fontStyle: "normal",
        fontWeight: "normal",
        src: `url("/fonts/PilotCommand/PilotCommand-qZWJ0.woff") format("woff")`
      },
      a: {
        textDecoration: "none",
        color: "inherit"
      },
      button: {
        cursor: "pointer"
      }
    },
    a: {
      cursor: "pointer",
      textDecoration: "none"
    },
    button: {
      cursor: "pointer"
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7"
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none"
    }
  }
});
