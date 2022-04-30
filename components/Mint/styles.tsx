import { ThemeUICSSObject, ThemeUIStyleObject } from "theme-ui";

export const modalContainerStyle: ThemeUICSSObject = {
  position: "relative",
  textAlign: "center",
  backgroundImage: [
    "url(/assets/images/bg_popup_mb.svg)",
    ,
    "url(/assets/images/XMLID_16_.svg)"
  ],

  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  minHeight: ["650px", , "452px"],
  width: ["100%", , "764px"],
  px: ["1rem", , "3rem", "6rem"],
  pt: [100, , "30px", 78],
  pb: 50
};

export const privateDaysContainerStyle: ThemeUICSSObject = {
  backgroundImage: "url(/assets/images/bg-private-day.svg)",
  backgroundRepeat: "no-repeat",
  minHeight: "307px",
  maxWidth: ["234px", , 200, "234px"],
  width: "auto",
  zIndex: 1,
  textAlign: "center",
  backgroundSize: "contain",
  mt: [0, , -50, 0]
};

export const numberWrapperStyle: ThemeUICSSObject = {
  margin: "auto",
  width: "80%",
  border: "1px solid white"
};

export const progressWrapperStyle: ThemeUICSSObject = {
  width: "100%",
  height: "22px",
  background: "svGradientLight",
  border: "1px solid var(--theme-ui-colors-border)",
  boxShadow: "0px 4px 10px 0px var(--theme-ui-colors-secondary)",
  filter: "drop-shadow(0px 4px 10px var(--theme-ui-colors-border))",

  "progress[value]": {
    WebkitAppearance: "none",
    appearance: "none",
    color: "secondary ",
    height: "22px",
    background: "transparent",

    "::-webkit-progress-bar": {
      height: "22px",
      color: "secondary "
    },
    "::-webkit-progress-value": {
      height: "22px",
      background: "svGradient"
    }
  }
};

export const titleStyle: ThemeUIStyleObject = {
  fontFamily: "roadmap",
  letterSpacing: 10,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "36px",
  lineHeight: "38px",
  textAlign: "center",
  textTransform: "uppercase",
  my: "36px"
};
