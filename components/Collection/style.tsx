import { ThemeUIStyleObject } from "theme-ui";

export const collectionCardStyle: ThemeUIStyleObject = {
  variant: "layout.card",
  maxWidth: 350,
  height: "auto",
  "> img": {
    width: ["100%"]
  }
};

export const collectionStyle: ThemeUIStyleObject = {
  variant: "layout.section",
  textAlign: "center",
  maxWidth: 1190,
  overflow: "hidden"
};
