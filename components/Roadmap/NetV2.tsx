import React from "react";
import { Box } from "theme-ui";
import { netStyle } from "./style";
import dynamic from "next/dynamic";
import { draw, setup } from "../../p5/base.p5";

const Sketch = dynamic(import("react-p5"), { ssr: false });
// const Net = React.lazy(() => import("./Net")); // Lazy-loaded

type Props = {};

export const NetV2 = (props: Props) => {
  return (
    <Box as="div" sx={netStyle}>
      <div className="my-canvas" id="myCanvas"></div>
      <Sketch setup={setup} draw={draw} />
    </Box>
  );
};
