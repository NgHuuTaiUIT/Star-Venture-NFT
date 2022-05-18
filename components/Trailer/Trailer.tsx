/** @jsxImportSource theme-ui */

import dynamic from "next/dynamic";
import React from "react";
import { Box } from "theme-ui";
import { LinearBackground } from "../LinearBackground/LinearBackground";
import { containerTrailerStyle, wrapTrailerStyle } from "./style";
const ReactPlayer = dynamic(import("react-player/youtube"), {
  ssr: false
});
const Trailer = ({
  url,
  compRef
}: {
  url: string;
  compRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={compRef} sx={{ position: "relative", zIndex: -1 }}>
      <Box sx={containerTrailerStyle} as="section">
        <LinearBackground
          style={{
            width: "100%",
            height: 500,
            zIndex: -1,
            display: ["block", , , "none"]
          }}
          rotation={0}
          top={"25%"}
        />
        <Box sx={wrapTrailerStyle}>
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            muted={true}
          />
        </Box>
      </Box>
    </section>
  );
};

export default Trailer;
