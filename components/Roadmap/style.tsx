import { ThemeUIStyleObject } from "theme-ui";

export const containerStyle: ThemeUIStyleObject = {
  variant: "layout.roadmap",
  position: "relative",
  minWidth: "100vw"
};

export const wrapStyle: ThemeUIStyleObject = {
  maxWidth: "container90",
  minHeight: 819,
  flexDirection: "column",
  m: "0 auto"
};

export const wrapRoadmapItemStyle: ThemeUIStyleObject = {
  flexDirection: ["column", "column", "column", "row"],
  maxWidth: ["85%", null, 1190],
  margin: "auto",
  justifyContent: "space-between"
};

export const widgetRoadmapItemStyle: ThemeUIStyleObject = {
  my: [22],
  mx: [10],
  maxWidth: [null, null, null, 250]
};

export const titleStyle: ThemeUIStyleObject = {
  variant: "text.roadmap",
  minWidth: [null, null, null, 300]
};

export const circleStyle: ThemeUIStyleObject = {
  display: ["none", null, null, "block"],
  position: "absolute",
  bottom: "10%",
  margin: "auto",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1
};

export const netStyle: ThemeUIStyleObject = {
  display: ["none", null, null, "block"],
  position: "absolute",
  bottom: -140,
  margin: "auto",
  left: "50%",
  transform: "translateX(-50%)"
};
