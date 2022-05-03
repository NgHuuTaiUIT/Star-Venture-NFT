import { ThemeUIStyleObject } from "theme-ui";

export const containerStyle: ThemeUIStyleObject = {
  variant: "layout.roadmap",
  position: "relative",
  maxWidth: "95%",
  overflow: "hidden"
};

export const wrapStyle: ThemeUIStyleObject = {
  maxWidth: 1260,
  minHeight: 819,
  flexDirection: "column",
  m: "0 auto"
};

export const wrapRoadmapItemStyle: ThemeUIStyleObject = {
  flexDirection: ["column", "column", "column", "row"],
  maxWidth: ["85%", , "100%"],
  margin: "auto",
  justifyContent: ["space-between", , "start"]
};

export const widgetRoadmapItemStyle: ThemeUIStyleObject = {
  my: [22],
  mx: [10],
  maxWidth: [null, null, null, 300]
  // mr: [0, , "2.8rem"]
};

export const titleStyle: ThemeUIStyleObject = {
  variant: "text.roadmap"
  // minWidth: [null, null, null, 300]
};

export const circleStyle: ThemeUIStyleObject = {
  display: ["none", null, null, "block"],
  position: "absolute",
  bottom: ["10%", , "12%"],
  margin: "auto",
  left: ["50%", , "50%"],
  transform: "translateX(-50%)",
  zIndex: 1
};

export const netStyle: ThemeUIStyleObject = {
  display: ["none", null, null, "block"],
  position: "absolute",
  bottom: -250,
  margin: "auto",
  left: "50%",
  transform: "translateX(-50%)",
  height: "100%",
  width: "100%"
};

export const svgStyle: ThemeUIStyleObject = {
  width: 0,
  height: 0
};
