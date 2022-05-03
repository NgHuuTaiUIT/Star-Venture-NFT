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
  width: ["80%", "60%", , 685],
  minHeight: ["65%", , , 419],
  minWidth: [685],
  height: "fit-content",
  m: "0 auto",
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
  justifyContent: ["start", , , "space-between"],
  alignItems: ["center", , , "start"],
  flexDirection: ["column", , , "row"],
  maxWidth: ["90%", , , "90%"],
  mx: "auto",
  my: [200, 150, , 0],
  gap: [70, 40],
  "> img": {
    flex: "0 0 33.33%",
    height: ["100%", , , "auto"],
    minWidth: [360, , , 0],
    objectFit: "cover",
    borderTopLeftRadius: "3",
    borderBottomLeftRadius: "3",
    maxWidth: ["90%", , , "100%"],
    my: [100, , 0, 0]
  }
};

export const textModalContentStyle: ThemeUIStyleObject = {
  fontSize: [42, 32, , 18],
  "> h2": {
    lineHeight: [2, , , 1],
    textAlign: ["center", , , "start"],
    fontSize: ["1.2em"],
    mb: 2
  },
  "> h4": {
    textAlign: ["center", , , "start"],
    fontWeight: "lighter",
    fontSize: "0.8em",
    lineHeight: [2, , , 3],
    mb: [80, , 0, 0]
  }
};

export const textStyle: ThemeUIStyleObject = {
  letterSpacing: "2px",
  display: "-webkit-box",
  WebkitLineClamp: [8, , , 8],
  "-webkit-box-orient": "vertical",
  overflowX: "hidden",
  overflowY: ["auto"],
  wordBreak: "break-word",
  lineHeight: ["2.5rem", "1.5rem", , "1.5rem"],
  maxHeight: [, "7.8rem", , , "14rem"],
  mt: [60, , 0, 0],
  whiteSpace: "pre-line"
};
