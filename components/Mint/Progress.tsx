import React from "react";
import { Box, Progress } from "theme-ui";
import { progressWrapperStyle } from "./styles";

const ProgressBar = ({ value, max }: { value: any; max: any }) => {
  return (
    <Box
      sx={{
        ...progressWrapperStyle
      }}>
      <Progress
        value={value}
        max={max}
        sx={{
          borderRadius: 0
        }}
      />
    </Box>
  );
};

export default ProgressBar;
