import { ThemeUIStyleObject } from "theme-ui";

export const wrapButton: ThemeUIStyleObject = {
  display: "flex",
  justifyContent: ["center", , , "start"],
  flexWrap: "nowrap",
  alignItems: "center",
  flex: "0 0 25%",
  width: ["100%", , "85%"],
  m: "auto"
};

export const btnConnectStyle: ThemeUIStyleObject = {
  width: ["100%", , , 200],
  background: "secondary",
  py: [52, , , 1],
  mt: [80, , , 0],
  ml: [0, , , 25],
  fontFamily: "Ubuntu",
  fontSize: ["1.8rem", , , "1rem"],
  fontWeight: "500",
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  "> img": {
    minHeight: ["2rem", , , "1rem"]
  }
};
