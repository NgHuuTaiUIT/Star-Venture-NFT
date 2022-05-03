import React, { LegacyRef, RefObject } from "react";
import ReactPlayer from "react-player/lazy";
import { Box } from "theme-ui";
import { containerTrailerStyle, wrapTrailerStyle } from "./style";

const Trailer = ({
  url,
  compRef
}: {
  url: string;
  compRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={compRef}>
      <Box sx={containerTrailerStyle} as="section">
        <Box sx={wrapTrailerStyle}>
          <ReactPlayer url={url} width="100%" height="100%" controls={true} />
        </Box>
      </Box>
    </section>
  );
};

export default Trailer;
