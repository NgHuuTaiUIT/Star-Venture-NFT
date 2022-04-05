import React from "react";
import { Box } from "theme-ui";

const Title = ({
  url,
  width,
  height = 51
}: {
  url: string;
  width?: number | string;
  height?: number | string;
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
        backgroundPosition: "center"
      }}
      variant="layout.img"
    />
  );
};

export default Title;
