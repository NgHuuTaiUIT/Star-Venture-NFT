import { ThemeUIStyleObject } from "theme-ui";

export const footerStyle: ThemeUIStyleObject = {
  maxWidth: ["calc(100vw - 40px)", , , 500],
  m: "auto",
  mt: -25,
  flexDirection: ["column"],
  gap: [20, , , 10],
  textAlign: "center"
};

export const titleStyle: ThemeUIStyleObject = {
  fontFamily: "roadmap",
  letterSpacing: 1.5,
  fontWeight: 500,
  fontSize: [56, , , 28]
};

export const lineStyle: ThemeUIStyleObject = {
  background: "#464D94",
  height: 2,
  minWidth: ["100%", , , "80%"]
};

export const iconWrapStyle: ThemeUIStyleObject = {
  justifyContent: "space-evenly",
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