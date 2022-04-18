import React, { FC, ReactNode } from "react";
import { Box, ThemeUICSSObject } from "theme-ui";

enum OptionLinearGradient {
  lgX = "lgX",
  lgY = "lgY",
  lgTop = "lgTop",
  lgFull = "lgFull"
}

//lg is linear-gradient
type SectionProps = {
  children: any;
  optLg?: Number[];
  styles?: ThemeUICSSObject;
  // :"lgX"|"lgY"|"lgTop"|"lgBottom"|"lgFull"|"";
};

const setBackgroundLinear = (optLg: any) => {
  const bg = optLg
    ? `${
        optLg[0] &&
        "linear-gradient(180deg, rgba(18,25,44,0.8) 0%, rgba(18,25,44,0) 40%)"
      },${
        optLg[1] &&
        "linear-gradient(90deg, rgba(18,25,44,0.8) 0%, rgba(18,25,44,0) 20%)"
      },${
        optLg[2] &&
        "linear-gradient(180deg, rgba(18,25,44,0) 60%, rgba(18,25,44,0.8) 200%)"
      },${
        optLg[3] &&
        "linear-gradient(90deg, rgba(18,25,44,0) 80%, rgba(18,25,44,0.8) 200%)"
      }`
    : "transparent";
  return bg;
};

const Section: FC<SectionProps> = ({
  children,
  optLg,
  styles
}: SectionProps): JSX.Element => {
  return (
    <Box
      as="section"
      variant="layout.section"
      sx={{
        background: setBackgroundLinear(optLg),
        ...styles
      }}>
      {children}
    </Box>
  );
};

export default Section;
