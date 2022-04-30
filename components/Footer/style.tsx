import { ThemeUIStyleObject } from "theme-ui";

export const footerStyle: ThemeUIStyleObject = {
  maxWidth: ["calc(100vw - 40px)", , , 500],
  m: "auto",
  // mt: "100%",
  flexDirection: ["column"],
  gap: [15, , , 10],
  textAlign: "center"
};

export const titleStyle: ThemeUIStyleObject = {
  fontFamily: "roadmap",
  letterSpacing: 1.5,
  fontWeight: 500,
  fontSize: [28]
};

export const lineStyle: ThemeUIStyleObject = {
  background: "#464D94",
  height: 2,
  mt: -10,
  minWidth: ["100%", , , "80%"]
};

export const iconWrapStyle: ThemeUIStyleObject = {
  maxWidth: ["97%"],
  justifyContent: ["space-evenly", , "center"],
  gap: [null, , "1.5rem"],
  alignItems: "center",
  height: "100%"
};
export const iconStyle: ThemeUIStyleObject = {
  maxHeight: 50,
  height: "1.8em",
  mx: 16,
  "> img": {
    height: "100%"
  }
};
