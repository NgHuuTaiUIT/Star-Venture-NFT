import { Box, ThemeUIStyleObject } from "theme-ui";

export const LinearBackgroundVertical = ({
  rotation = 0,
  top,
  left,
  right,
  bottom,
  style
}: {
  rotation?: string | number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  style?: ThemeUIStyleObject;
}) => (
  <Box
    sx={{
      position: "absolute",
      top,
      left,
      right,
      bottom,
      background:
        "linear-gradient(90deg, #12192C 6.01%, rgba(18, 25, 44, 0) 100%)",
      // "linear-gradient(90deg, #0f1c2d 8%, rgba(15, 28, 45, 0.6) 42%, rgba(15, 28, 45, 0) 100%)",
      mixBlendMode: "normal",
      transform: `rotate(${rotation}deg)`,
      zIndex: 1,
      ...style
    }}
  />
);

export const LinearBackground = ({
  rotation = 0,
  top,
  left,
  right,
  bottom,
  style
}: {
  rotation?: string | number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  style?: ThemeUIStyleObject;
}) => (
  <Box
    sx={{
      position: "absolute",
      top,
      left,
      right,
      bottom,
      background: `linear-gradient(${rotation}deg, #12192C 6.01%, rgba(18, 25, 44, 0) 100%)`,
      // "linear-gradient(90deg, #0f1c2d 8%, rgba(15, 28, 45, 0.6) 42%, rgba(15, 28, 45, 0) 100%)",
      mixBlendMode: "normal",
      zIndex: 1,
      ...style
    }}
  />
);
