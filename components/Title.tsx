import React from "react";
import { Box } from "theme-ui";

const Title = ({
  url,
  width,
  height = 51,
  backgroundPosition = "center",
  minWidth,
  sx
}: {
  url: string;
  width?: number | string | any[];
  height?: number | string | any[];
  backgroundPosition?: string;
  minWidth?: number | string | any[];
  sx?: any;
}) => {
  return (
    <Box
      as="h2"
      sx={{
        backgroundImage: `url(${url})`,
        width: [`calc(100% - 50px)`, null, null, width],
        height,
        margin: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition,
        minWidth,
        ...sx
      }}
      variant="layout.img"
    />
  );
};

export default Title;
