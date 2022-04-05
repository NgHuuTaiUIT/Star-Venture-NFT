import React from "react";
import { Box, Button } from "theme-ui";

type Props = {};

const Story = (props: Props) => {
  return (
    <Box
      as="section"
      variant="layout.section"
      sx={{
        margin: "auto",
        textAlign: "center",
        maxWidth: 1140,
        pt: 100,
        px: [36, null, null]
      }}>
      <img src="/assets/logo_star_venture_1.png" alt="logo" width={"100%"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 300,
          color: "#fff",
          fontSize: 18,
          lineHeight: 2,
          fontWeight: 300,
          textShadow: "1px 1px 3px rgb(0 0 0 / 20%)",
          mt: -100
        }}>
        <p>
          Star Venture is a decentralized MMORPG built on “Chain name”. Get
          onboard into an ever-expanding
          <br />
          space journey. Socialize-to-earn in a community-driven universe where
          battles explode, enterprises
          <br />
          rise, governments fall. Be ready for takeoff, captain.
          <br />
          The path is for you to choose.
        </p>
        <Button
          sx={{
            background: "url(/assets/btn.png)",
            width: 392,
            height: 83,
            backgroundSize: "auto",
            backgroundPosition: "center",
            color: "#428EFF",
            fontSize: 20
          }}>
          THE STORY
        </Button>
      </Box>
    </Box>
  );
};

export default Story;
