import { ThemeUIStyleObject } from "theme-ui";

export const containerTeamStyle: ThemeUIStyleObject = {
  flexDirection: ["column"],
  alignItems: "center"
};

export const gridTeamStyle: ThemeUIStyleObject = {
  mt: ["2rem"],
  gap: ["1rem", , , 130]
};

export const nameCardBoxStyle: ThemeUIStyleObject = {
  maxWidth: "container90",
  color: "transparent",
  margin: "0 auto",
  background: "url(/assets/images/Union.svg) no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  minWidth: [179],
  minHeight: [189],
  overflow: "hidden",
  p: "30px 14px 22px 24px",
  justifyContent: "center",
  alignItems: "center",
  ":hover": { "& #member-detail": { opacity: "1" } }
};

export const imageStyle: ThemeUIStyleObject = {
  width: [140, null, null, 140],
  height: "auto",
  borderRadius: 3
};

export const nameCardBoxHoverStyle: ThemeUIStyleObject = {
  opacity: "0",
  position: "absolute",
  bg: "secondary",
  width: "100%",
  height: "100%",
  zIndex: 1,
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
  flexDirection: "column",
  gap: 10,
  textAlign: "center",
  fontSize: ["1rem", , , 18],
  lineHeight: 1
};
