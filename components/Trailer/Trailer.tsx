import React, { LegacyRef, RefObject } from "react";
import ReactPlayer from "react-player/lazy";
import { Box } from "theme-ui";
import { containerTrailerStyle, wrapTrailerStyle } from "./style";

const Trailer = ({ url }: { url: string }, ref: any) => {
  return (
    <section ref={ref}>
      <Box sx={containerTrailerStyle} as="section">
        <Box sx={wrapTrailerStyle}>
          <ReactPlayer url={url} width="100%" height="100%" controls={true} />
        </Box>
      </Box>
    </section>
  );
};

export default React.forwardRef(Trailer);
