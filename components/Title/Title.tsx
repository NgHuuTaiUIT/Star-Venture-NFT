import React from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";

const Title = ({
  title,
  letterSpacing = [1],
  fontSize = [36],
  style,
  stroke = "rainbow"
}: {
  title: string;
  letterSpacing?: any;
  fontSize?: any;
  style?: ThemeUIStyleObject;
  stroke?: "rainbow" | "white";
}) => {
  const size: Size = useWindowSize();
  const currFontsize = size.width >= 768 ? fontSize[1] : fontSize[0];
  const currLetterSpacing =
    size.width >= 768 ? letterSpacing[1] : letterSpacing[0];
  return (
    <Box sx={{ textTransform: "uppercase", ml: 10, ...style }}>
      <svg width="100%" height="51" textAnchor="middle">
        <defs>
          <linearGradient
            id="rainbow"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" offset="30%" />
            <stop stopColor="rgba(255, 255, 255, 0)" offset="96.46%" />
          </linearGradient>
          <linearGradient
            id="white"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" offset="0%" />
            <stop stopColor="#FFFFFF" offset="100%" />
          </linearGradient>
        </defs>
        <text fill="transparent" stroke={`url(#${stroke})`}>
          <tspan
            x="50%"
            dy="80%"
            fontFamily="Pilot Command Regular"
            fontSize={currFontsize}
            letterSpacing={currLetterSpacing}
            fontWeight="400">
            {title}
          </tspan>
        </text>
      </svg>
    </Box>
  );
};
export default Title;
