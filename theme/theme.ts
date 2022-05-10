import { makeTheme } from "@theme-ui/css/utils";
export const theme = makeTheme({
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true
  },
  breakpoints: ["480px", "768px", "1024px", "1368px", "1584px"],
  colors: {
    primary: "#fff",
    secondary: "#6688FF",
    text: "#fff",
    background: "#12192C",
    borderColor: "#9AB0FF",
    svGradient:
      "linear-gradient(180deg, #A8BBFF 0%, rgba(0, 18, 183, 0.88) 118.89%)",
    svGradientLight:
      " background: linear-gradient(175.7deg, rgba(15, 28, 45, 0) -6.97%, rgba(87, 72, 255, 0.616) 85.19%, rgba(41, 83, 232, 0.7) 95.42%)"
  },
  fonts: {
    body: "Ubuntu, sans-serif",
    heading: "Ubuntu,sans-serif",
    roadmap: "Pilot Command Regular"
  },
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
  space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container90: ["1190px"],
    container40: ["1140px"]
  },
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
      maxWidth: ["100vw", "90vw", , , "100vw"],
      margin: "auto",
      mb: ["4rem"],
      width: ["100%"],
      lineHeight: [1.5],
      "> * ": {
        mx: "auto !important"
      }
    },
    features: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: ["2rem"],
      "@media only screen and (max-width: 1024px)": {
        gridTemplateColumns: "repeat(1, 1fr)",
        width: "calc(100% - 1rem)",
        margin: "2.8rem auto"
      }
    },
    collections: {
      display: "grid",
      gridTemplateRows: "1fr 1fr"
    },
    roadmap: {
      backgroundImage: "url(/assets/images/bg-roadmap.webp)",
      "@media only screen and (max-width: 1200px)": {
        backgroundImage: "none"
      }
    },
    card: {
      minWidth: [290, 290, 290, 290, 290]
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
      minWidth: ["376px", "480px", "768px", "992px"]
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
      fontSize: ["1rem"]
    },
    roadmap: {
      fontFamily: "roadmap",
      fontSize: [30],
      lineHeight: 1,
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
      backgroundPosition: "center",
      backgroundColor: "transparent"
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
      position: "relative",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "lighter",
      userSelect: "none",
      backgroundColor: "#12192C",
      maxWidth: "1920px",
      width: "100%",
      margin: "0 auto",
      fontSize: ["18px"],
      backgroundImage: [
        "url(/assets/images/bg-story.png),url(/assets/images/bf-2.png),url(/assets/images/bg-3.png),url(/assets/images/bg-4.png)",
        ,
        ,
        "url(/assets/images/bg.webp)"
      ],
      backgroundRepeat: "no-repeat",
      backgroundPositionX: ["30%,30%,22%,30%", , , "100%"],
      // backgroundPositionY: ["0%", "4%"],
      backgroundPositionY: "4%,-150px,1200px,3500px",
      height: "100%",
      overflowX: "hidden",
      backgroundSize: ["auto", , , 1920],

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
