import { ThemeUIStyleObject } from "theme-ui";

export const containerTeamStyle: ThemeUIStyleObject = {
  variant: "layout.section",
  flexDirection: ["column"],
  alignItems: "center",
  mt: 85
};

export const gridTeamStyle: ThemeUIStyleObject = {
  gap: [130, , , 130],
  mt: 65
};

export const nameCardBoxStyle: ThemeUIStyleObject = {
  maxWidth: "container90",
  color: "transparent",
  margin: "0 auto",
  background: "url(/assets/images/Union.svg) no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  minWidth: [360, , , 179],
  minHeight: [380, , , 189],
  overflow: "hidden",
  // p: "26px 14px 22px 24px",
  p: ["76px 28px 66px 56px", , , "26px 14px 22px 24px"],
  // px: "1rem",
  // py: "2rem",
  justifyContent: "center",
  alignItems: "center",
  ":hover": { "& #member-detail": { opacity: "1" } }
};

export const imageStyle: ThemeUIStyleObject = {
  width: ["10rem", null, null, 140],
  height: "auto",
  borderRadius: 3
};

export const nameCardBoxHoverStyle: ThemeUIStyleObject = {
  // width: [280, null, null, 140],
  // height: [280, null, null, 140],
  opacity: "0",
  position: "absolute",
  bg: "secondary",
  width: "100%",
  height: "100%",
  zIndex: 98,
  top: 0,
  m: "auto",
  justifyContent: "center",
  alignItems: "center",
  transition: "opacity 0.3s ease"
};

export const btnStyle: ThemeUIStyleObject = {
  color: "primary",
  fontSize: [14],
  fontWeight: 500,
  ":hover": {
    textDecoration: "underline"
  }
};

export const InfoStyle: ThemeUIStyleObject = {
  textAlign: "center",
  fontSize: ["1.5rem", , , 18]
};
