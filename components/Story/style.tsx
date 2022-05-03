import { ThemeUIStyleObject } from "theme-ui";

export const containerStoryStyle: ThemeUIStyleObject = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mt: `0 !important`,
  margin: "auto",
  textAlign: "center",
  maxWidth: "100%",
  pt: ["calc(40% + 9rem)", , "calc(20% + 1.5rem)"],
  background: "url(/assets/images/bg-story.png) no-repeat cover",
  "> img": {
    width: ["100%", , "45%"],
    mt: [0],
    position: "absolute",
    top: ["9.5rem", , "10%"]
  }
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
  gap: ["3rem", , , 0],
  maxWidth: ["90%", , "70%"]
};

export const buttonStyle: ThemeUIStyleObject = {
  variant: "backgrounds.full",
  backgroundImage: "url(/assets/images/btn.png)",
  width: ["90%", , , 392],
  height: [100],
  color: "white",
  fontSize: ["1rem", , , 20],
  transition: "color 0.3s linear",
  py: 10,
  ":hover": {
    color: "#428EFF"
  }
};

export const textStoryStyle: ThemeUIStyleObject = {
  flex: "0 0 100%",
  transition: "all 0.3s",
  lineHeight: [1.7, , , 1.8]
};
