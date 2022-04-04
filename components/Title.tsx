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
        width,
        height,
        margin: "auto"
      }}
      variant="styles.img"
    />
  );
};

export default Title;
