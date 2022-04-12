import { ThemeUIStyleObject } from "theme-ui";

export const containerStoryStyle: ThemeUIStyleObject = {
  variant: "layout.section",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mt: `0 !important`,
  margin: "auto",
  textAlign: "center",
  maxWidth: "100%",
  pt: ["45%", , "6%"],
  // px: [36, null, null],
  background: "url(/assets/images/bg-story.png) no-repeat cover",
  "> img": { width: ["100%", , "60%"], mt: [0] }
};

export const boxStoryStyle: ThemeUIStyleObject = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 300,
  color: "#fff",
  textShadow: "1px 1px 3px rgb(0 0 0 / 20%)",
  mt: [0, , -80],
  gap: ["4rem", , , 0],
  maxWidth: ["90%", , "60%"]
};

export const buttonStyle: ThemeUIStyleObject = {
  background: "url(/assets/images/btn.png)",
  variant: "backgrounds.full",
  width: ["90%", , , 392],
  height: [100],
  color: "white",
  fontSize: ["1rem", , , 20],
  transition: "color 0.3s linear",
  ":hover": {
    color: "#428EFF"
  }
};

export const textStoryStyle: ThemeUIStyleObject = {
  flex: "0 0 100%",
  transition: "all 0.3s",
  lineHeight: [1.6, , , 2]
};
