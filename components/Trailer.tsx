import React from "react";
import ReactPlayer from "react-player/lazy";
import { Box } from "theme-ui";

const Trailer = ({ url }: { url: string }) => {
  return (
    <Box
      variant="layout.section"
      sx={{ position: "relative", pt: 566, maxWidth: 1010 }}
      as="section">
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          maxWidth: "container",
          margin: "auto"
        }}>
        <ReactPlayer url={url} width="100%" height="100%" controls={true} />
      </Box>
    </Box>
  );
};

export default Trailer;
