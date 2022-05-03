import { ThemeUIStyleObject } from "theme-ui";

export const containerStyle: ThemeUIStyleObject = {
  variant: "layout.roadmap",
  position: "relative",
  mt: 65
};

export const wrapStyle: ThemeUIStyleObject = {
  variant: "layout.section",
  // maxWidth: 1920,
  minHeight: 819,
  flexDirection: "column"
};

export const wrapRoadmapItemStyle: ThemeUIStyleObject = {
  flexDirection: ["column", "column", "column", "row"],
  maxWidth: [null, null, 1190],
  margin: "auto",
  justifyContent: "space-between"
};

export const widgetRoadmapItemStyle: ThemeUIStyleObject = {
  my: [40],
  mx: [81, 81, null, 10],
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
