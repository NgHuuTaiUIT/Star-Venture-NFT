import { ThemeUIStyleObject } from "theme-ui";

export const containerStyle: ThemeUIStyleObject = {
  position: "fixed",
  display: "flex",
  justifyContent: ["start", , , "center"],
  alignItems: ["start", , , "center"],
  backgroundImage: [
    "url(/assets/images/bg_popup_mb.svg)",
    ,
    ,
    "url(/assets/images/Popup.svg)"
  ],
  backgroundRepeat: "no-repeat",
  backgroundSize: ["contain", , , "contain"],
  backgroundColor: "transparent",
  width: ["90%", , "685px"],
  height: ["80%", , "419px"],
  // m: "0 auto",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
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
  justifyContent: ["center", , , "start"],
  alignItems: ["center", , , "start"],
  flexDirection: ["column", , , "row"],
  maxWidth: ["100%", , "90%"],
  height: ["100%"],
  gap: 30,
  m: "auto",
  mt: ["30%", , "10%"],
  "> img": {
    maxWidth: ["60%", , "30%"],
    objectFit: "cover",
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  }
};

export const wrapInfoModalContentStyle: ThemeUIStyleObject = {
  maxWidth: ["85%", , "80%"],
  height: "80%",
  "> h2": {
    lineHeight: [1],
    textAlign: ["center", , , "start"]
  },
  "> h4": {
    textAlign: ["center", , , "start"],
    fontWeight: "lighter",
    fontSize: "0.8em",
    lineHeight: [3]
  },
  "> span": {
    mt: 10,
    letterSpacing: "1px",
    display: "-webkit-box",
    WebkitLineClamp: [10, , , 12],
    "-webkit-box-orient": "vertical",
    overflowX: "hidden",
    overflowY: ["auto"],
    wordBreak: "break-word",
    lineHeight: ["1rem"],
    maxHeight: ["8rem", , , "14rem"],
    whiteSpace: "pre-line"
  }
};
