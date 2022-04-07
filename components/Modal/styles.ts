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
  zIndex: 1000,
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
  zIndex: 9999
};

export const textStyle: ThemeUIStyleObject = {
  letterSpacing: "2px",
  display: "-webkit-box",
  WebkitLineClamp: [5, , , 8],
  "-webkit-box-orient": "vertical",
  overflowX: "hidden",
  overflowY: ["auto"],
  wordBreak: "break-word",
  lineHeight: ["2.5rem", "1.5rem", , "1.5rem"],
  maxHeight: "14rem",
  mt: [60, , 0, 0]
};
