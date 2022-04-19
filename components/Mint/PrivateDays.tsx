import React, { ReactNode } from "react";
import { Box, Text } from "theme-ui";
import Title from "../Title/Title";
import { privateDaysContainerStyle, numberWrapperStyle } from "./styles";
type Props = {
  children?: ReactNode;
};

const PrivateDay: React.FC<Props> = () => {
  return (
    <Box sx={privateDaysContainerStyle}>
      <Title
        title="private"
        letterSpacing={[1]}
        fontSize={[40, 30]}
        style={{ width: "234px", ml: 0, mt: 30, textTransform: "none" }}
      />
      <Title
        title="sale"
        letterSpacing={[1]}
        fontSize={[40, 30]}
        style={{
          textTransform: "none",
          width: "234px",
          ml: 0,
          mt: -30
        }}
      />
      <Box sx={numberWrapperStyle}>
        <Box
          as="h1"
          variant="text.roadmap"
          sx={{ fontSize: "4rem", lineHeight: "4rem", fontWeight: "400" }}>
          03
        </Box>
        <Box
          as="h2"
          variant="text.roadmap"
          sx={{ fontSize: "2rem", mb: "0.7rem" }}>
          DAYS
        </Box>
      </Box>
      <Text sx={{ lineHeight: "3rem" }}>12:34:56</Text>
    </Box>
  );
};

export default PrivateDay;
