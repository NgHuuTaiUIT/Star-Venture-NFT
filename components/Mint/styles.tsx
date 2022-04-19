import { ThemeUICSSObject } from "theme-ui";

export const modalContainerStyle: ThemeUICSSObject = {
  position: "relative",
  // top: "50%",
  // left: "50%",
  margin: "auto",
  // transform: "translate(-50%,-50%)",
  textAlign: "center",
  backgroundImage: "url(/assets/images/XMLID_16_.svg)",
  backgroundRepeat: "no-repeat",
  minHeight: "452px",
  width: "764px",
  px: "6rem",
  pt: 78,
  pb: 50
};

export const privateDaysContainerStyle: ThemeUICSSObject = {
  position: "absolute",
  top: "60%",
  left: "0",
  margin: "auto",
  ml: -117,
  transform: "translate(-50%,-50%)",
  backgroundImage: "url(/assets/images/bg-private-day.svg)",
  backgroundRepeat: "no-repeat",
  minHeight: "452px",
  maxWidth: "234px",
  width: "auto",
  zIndex: 99,
  textAlign: "center"
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
