import { ThemeUIStyleObject } from "theme-ui";

export const btnMenuMobileStyle: ThemeUIStyleObject = {
  // transform: "scale(1)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "transparent",
  cursor: "pointer",
  display: ["block", , , "none"],
  height: [36],
  position: "fixed",
  right: 30,
  top: 30,
  width: [36],
  zIndex: 9999
};

export const containerNavbarStyle: ThemeUIStyleObject = {
  width: "100%",
  height: ["100%", , , "auto"],
  background: [
    "linear-gradient(180deg, #12192C 0%, rgba(18, 25, 44, 0) 100%),url(/assets/images/bg-modal-menu.png)",
    ,
    ,
    "linear-gradient(0deg, rgba(18,25,44,0) 0%, rgba(18,25,44,1) 100%)"
  ],
  variant: "backgrounds.full",
  backgroundPositionY: "-100px",
  zIndex: 999
};

export const wrapNavbarStyle: ThemeUIStyleObject = {
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: 1,
  flexDirection: ["column", "column", , "row"],
  height: ["80%", , , "auto"],
  justifyContent: ["center", , "start"],
  m: "auto",
  maxWidth: "80%",
  pt: ["20%", , 14],
  pl: [3, , 3.5],
  pr: [3, , 3.5],
  width: ["80%", , "60%"]
};

export const wrapLeftMenuStyle: ThemeUIStyleObject = {
  alignItems: "center",
  flex: "0 0 60%",
  flexDirection: ["column", "column", , "row"],
  height: "100%",
  justifyContent: ["space-between", , "start"],
  ml: [24, , 0]
};

export const wrapRightMenuStyle: ThemeUIStyleObject = {
  flex: "0 0 18%",
  justifyContent: ["center", , "left"],
  alignItems: "center",
  height: "100%",
  width: "100%",
  m: "0 auto",
  mt: [50, , , 0],
  minHeight: [50]
};

export const linkStyle: ThemeUIStyleObject = {
  display: "inline-block",
  fontSize: ["1.35rem", , , "1rem"],
  height: 50,
  position: "relative",
  textAlign: "center",
  transition: "font-weight,color 0.5s",
  width: ["100%", , , 120]
};

export const iconStyle: ThemeUIStyleObject = {
  maxHeight: ["100%", , , 50],
  mx: [16],
  "> img": {
    minWidth: [40, , , 20],
    objectPosition: "center",
    objectFit: "fill"
  }
  // transform: ["scale(5)", , "scale(3)", "scale(1)"]
};

export const lineStyle: ThemeUIStyleObject = {
  backgroundImage: "url(/assets/images/line.svg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  bottom: ["-5%"],
  height: [2],
  left: "50%",
  position: "absolute",
  transform: "translateX(-50%)",
  width: ["15rem", , , "100%"]
};
