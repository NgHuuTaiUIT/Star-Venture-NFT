import { ThemeUIStyleObject } from "theme-ui";

export const btnMenuMobileStyle: ThemeUIStyleObject = {
  display: ["block", , , "none"],
  position: "fixed",
  right: "10%",
  top: "4%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "transparent",
  height: [40],
  width: [40],
  cursor: "pointer",
  transform: "scale(2)",
  zIndex: 9999
};

export const containerNavbarStyle: ThemeUIStyleObject = {
  position: "fixed",
  width: "100%",
  height: ["100%", , , "auto"],
  py: ["20%", , , 0],
  background: [
    "linear-gradient(180deg, #12192C 0%, rgba(18, 25, 44, 0) 100%),url(/assets/images/bg-mb.png)",
    ,
    ,
    "linear-gradient(0deg, rgba(18,25,44,0) 0%, rgba(18,25,44,1) 100%)"
  ],
  variant: "backgrounds.full",
  backgroundSize: "cover",
  zIndex: 999
  // "::after": {
  //   content: `'""'`,
  //   variant: "backgrounds.full",
  //   backgroundImage: "url(/assets/images/bg-mb.png)",
  //   position: "absolute",
  //   inset: 0,
  //   width: "100%",
  //   backgroundSize: "cover"
  // }
};

export const wrapNavbarStyle: ThemeUIStyleObject = {
  height: ["100%", , , "auto"],
  flexDirection: ["column", "column", , "row"],
  pt: 14,
  borderRadius: 1,
  mx: "auto",
  maxWidth: "80%",
  justifyContent: ["center", , , "space-between"],
  alignItems: "center",
  backgroundColor: "transparent",
  px: 3
};

export const wrapLeftMenuStyle: ThemeUIStyleObject = {
  flexDirection: ["column", "column", , "row"],
  justifyContent: ["space-between", , , "center"],
  alignItems: "center",
  ml: 24,
  height: "100%",
  flex: "0 0 60%"
};

export const wrapRightMenuStyle: ThemeUIStyleObject = {
  justifyContent: ["space-evenly"],
  alignItems: "center",
  height: "100%",
  width: "100%",
  m: "0 auto",
  mt: [50, , , 0],
  minHeight: [50]
};

export const linkStyle: ThemeUIStyleObject = {
  display: "inline-block",
  width: ["100%", , , 120],
  height: 50,
  fontSize: ["1.8rem", , , "1rem"],
  transition: "font-weight,color 0.5s",
  textAlign: "center",
  // letterSpacing: 2
  position: "relative"
  // mt: [80]
};

export const iconStyle: ThemeUIStyleObject = {
  maxHeight: ["100%", , , 50],
  mx: 16,
  "> img": {
    minWidth: [80, , , 20],
    objectPosition: "center",
    objectFit: "fill"
  }
  // transform: ["scale(5)", , "scale(3)", "scale(1)"]
};

export const btnConnectStyle: ThemeUIStyleObject = {
  width: ["100%", , , 200],
  background: "secondary",
  py: [52, , , 1],
  mt: [80, , , 0],
  ml: [0, , , 25],
  fontFamily: "Ubuntu",
  fontSize: ["1.8rem", , , "1rem"],
  fontWeight: "500",
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  "> img": {
    minHeight: ["2rem", , , "1rem"]
  }
};

export const lineStyle: ThemeUIStyleObject = {
  position: "absolute",
  bottom: ["-50%", , , 0, 0],
  left: "50%",
  transform: "translateX(-50%)",
  backgroundImage: "url(/assets/images/line.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: [5, , , 2],
  width: ["15rem", , , "100%"]
};
