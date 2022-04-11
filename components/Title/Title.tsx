import React from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";

const Title = ({
  url,
  width = [`calc(100% - 50px)`],
  height = 51,
  backgroundPosition = "center",
  minWidth,
  style
}: {
  url: string;
  width?: number | string | any[];
  height?: number | string | any[];
  backgroundPosition?: string;
  minWidth?: number | string | any[];
  style?: ThemeUIStyleObject;
}) => {
  return (
    <Box
      as="h2"
      sx={{
        backgroundImage: `url(${url})`,
        width,
        height,
        margin: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition,
        minWidth,
        ...style
      }}
      variant="layout.img"
    />
  );
};

export default Title;
