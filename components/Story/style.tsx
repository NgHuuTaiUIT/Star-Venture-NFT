import { ThemeUIStyleObject } from "theme-ui";

export const containerStoryStyle: ThemeUIStyleObject = {
  variant: "layout.section",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  mt: `0 !important`,
  margin: "auto",
  textAlign: "center",
  maxWidth: 1140,
  pt: 100,
  px: [36, null, null],
  "> img": { width: ["100%", null, null, "80%"], mt: [300, , , 0] }
};

export const boxStoryStyle: ThemeUIStyleObject = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 300,
  color: "#fff",
  textShadow: "1px 1px 3px rgb(0 0 0 / 20%)",
  mt: -100,
  gap: ["2rem", , , 0]
};

export const buttonStyle: ThemeUIStyleObject = {
  background: "url(/assets/images/btn.png)",
  variant: "backgrounds.full",
  width: ["85%", , , 392],
  height: [200, , , 83],
  color: "white",
  fontSize: ["1.5rem", , , 20],
  transition: "color 0.3s linear",
  ":hover": {
    color: "#428EFF"
  }
};

export const textStoryStyle: ThemeUIStyleObject = {
  flex: "0 0 100%",
  transition: "all 0.3s",
  lineHeight: 2
};
