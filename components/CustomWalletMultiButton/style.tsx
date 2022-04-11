import { ThemeUIStyleObject } from "theme-ui";

export const wrapButton: ThemeUIStyleObject = {
  display: "flex",
  justifyContent: ["center", , , "end"],
  flexWrap: "nowrap",
  alignItems: "center",
  flex: "0 0 18%",
  width: ["100%", , , "85%"],
  m: "auto"
};

export const btnConnectStyle: ThemeUIStyleObject = {
  width: ["100%"],
  background: "secondary",
  mt: [40, , , 0],
  ml: [0, , , 25],
  fontFamily: "Ubuntu",
  fontSize: ["1.2rem", , , "1rem"],
  fontWeight: "400",
  borderRadius: 2,
  alignItems: "center",
  justifyContent: "center",
  "> img": {
    minHeight: ["1rem"]
  }
};
