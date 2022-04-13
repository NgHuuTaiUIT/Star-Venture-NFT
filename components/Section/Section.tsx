import React, { FC, ReactNode } from "react";
import { Box } from "theme-ui";

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
  // :"lgX"|"lgY"|"lgTop"|"lgBottom"|"lgFull"|"";
};

const setBackgroundLinear = (optLg: any) => {
  const bg = optLg
    ? `${
        optLg[0] &&
        "linear-gradient(180deg, rgba(18,25,44,1) 0%, rgba(18,25,44,0) 40%)"
      },${
        optLg[1] &&
        "linear-gradient(90deg, rgba(18,25,44,1) 0%, rgba(18,25,44,0) 20%)"
      },${
        optLg[2] &&
        "linear-gradient(180deg, rgba(18,25,44,0) 60%, rgba(18,25,44,1) 100%)"
      },${
        optLg[3] &&
        "linear-gradient(90deg, rgba(18,25,44,0) 80%, rgba(18,25,44,1) 100%)"
      }`
    : "transparent";
  return bg;
};

const Section: FC<SectionProps> = ({
  children,
  optLg
}: SectionProps): JSX.Element => {
  return (
    <Box
      as="section"
      variant="layout.section"
      sx={{
        background: setBackgroundLinear(optLg)
      }}>
      {children}
    </Box>
  );
};

export default Section;
