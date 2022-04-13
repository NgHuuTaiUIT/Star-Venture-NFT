import React from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";

// const Title = ({
//   url,
//   width = [`calc(100% - 50px)`],
//   height = 51,
//   backgroundPosition = "center",
//   minWidth,
//   style
// }: {
//   url: string;
//   width?: number | string | any[];
//   height?: number | string | any[];
//   backgroundPosition?: string;
//   minWidth?: number | string | any[];
//   style?: ThemeUIStyleObject;
// }) => {
//   return (
//     <Box
//       as="h2"
//       sx={{
//         backgroundImage: `url(${url})`,
//         width,
//         height,
//         margin: "auto",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//         backgroundPosition,
//         minWidth,
//         ...style
//       }}
//       variant="layout.img"
//     />
//   );
// };

const Title = ({
  title,
  letterSpacing = 1
}: {
  title: string;
  letterSpacing?: any;
}) => {
  return (
    <Box sx={{ textTransform: "uppercase", ml: 10 }}>
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
        </defs>
        <text fill="transparent" stroke="url(#rainbow)">
          <tspan
            x="50%"
            dy="80%"
            fontFamily="Pilot Command Regular"
            fontSize="36"
            fontWeight="400"
            letterSpacing={letterSpacing}>
            {title}
          </tspan>
        </text>
      </svg>
    </Box>
  );
};
export default Title;
