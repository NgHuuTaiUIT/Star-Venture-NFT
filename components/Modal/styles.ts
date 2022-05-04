import { ThemeUIStyleObject } from "theme-ui";

const TOP_HEIGHT = 112;
const HEIGHT = 677;

export const containerStyle: ThemeUIStyleObject = {
  position: "fixed",
  display: "flex",
  justifyContent: ["start", , "center"],
  alignItems: ["start", , "center"],
  backgroundImage: [
    "url(/assets/images/bg_popup_mb.svg)",
    ,
    "url(/assets/images/Popup.svg)",

    "url(/assets/images/Popup.svg)"
  ],
  backgroundRepeat: "no-repeat",
  backgroundSize: ["contain"],
  backgroundColor: "transparent",
  // width: ["90%", , "685px"],
  // height: ["80%", , "419px"],
  // m: "0 auto",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  minHeight: ["30rem", , 419],
  width: ["95%", , 685],
  maxWidth: [384, , 685]
};

export const backgroundStyle: ThemeUIStyleObject = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  width: "100%",
  height: "100%",
  zIndex: 99999,
  overflowX: "hidden",
  overflowY: "auto"
};

export const closeButtonStyle: ThemeUIStyleObject = {
  background: "transparent",
  height: [20],
  width: [20],
  p: 0,
  m: 0,
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 100000
};

export const modalContentStyle: ThemeUIStyleObject = {
  borderRadius: "3",
  display: "flex",
  justifyContent: ["center", , "start"],
  alignItems: ["center", , "start"],
  flexDirection: ["column", , "row"],
  maxWidth: ["100%", , "90%"],
  height: [HEIGHT - TOP_HEIGHT, , "70%"],
  gap: 30,
  my: "auto",
  mx: ["auto", , 50],
  mt: [96, , "10%"],
  pb: [67, , 0],

  "> img": {
    minWidth: [180],
    width: 180,
    objectFit: "cover",
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  }
};

export const wrapInfoModalContentStyle: ThemeUIStyleObject = {
  maxWidth: ["85%"],
  maxHeight: ["100%", , 290],
  "> h2": {
    lineHeight: [1],
    textAlign: ["center", , "start"]
  },
  "> h4": {
    textAlign: ["center", , "start"],
    fontWeight: "lighter",
    fontSize: "0.8em",
    lineHeight: [3]
  },
  "> span": {
    overflow: "auto",
    mt: 10,
    letterSpacing: "1px",
    display: "-webkit-box",
    // WebkitLineClamp: [6, , , 12],
    "-webkit-box-orient": "vertical",
    wordBreak: "break-word",
    lineHeight: ["27px"],
    minHeight: [0, , "12rem"],
    maxHeight: [216, , "12rem"]
    // whiteSpace: "pre-line"
  }
};
