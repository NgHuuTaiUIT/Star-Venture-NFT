/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Flex, Image } from "theme-ui";
import { Size, useWindowSize } from "../hooks/useWindowSize";
import Title from "./Title";

const data = [
  {
    idxPhrase: 1,
    title: "creation",
    content:
      "Our artists and game designers have been working closely to deliver quality artwork that comes with different bonuses and rarities. This is gratitude to our early supporters."
  },
  {
    idxPhrase: 2,
    title: "Avatar NFTs\nlaunch",
    content:
      "Everything is considered and prepared for a seamless launch that will ensure every transaction is on track"
  },
  {
    idxPhrase: 3,
    title: "Staking for \n$STARV",
    content:
      "   A stake platform is under development and Avatar NFTs holders will be one of the first to have $STARV in their bag. Specific time TBD."
  },
  {
    idxPhrase: 4,
    title: "Star Venture \ngame released",
    content:
      "A stake platform is under development and Avatar NFTs holders will be one of the first to have $STARV in their bag. Specific time TBD."
  }
];

const Roadmap = () => {
  const size: Size = useWindowSize();
  return (
    <Box
      as="section"
      variant="layout.roadmap"
      sx={{ position: "relative", mt: 65 }}>
      <Flex
        as="section"
        variant="layout.section"
        sx={{
          // maxWidth: 1920,
          minHeight: 819,
          flexDirection: "column"
        }}>
        <Box sx={{ mt: 0 }}>
          <Box sx={{ my: 51 }}>
            <Title url="/assets/images/roadmap.svg" width={379} />
          </Box>
          <Flex
            sx={{
              flexDirection: ["column", "column", "column", "row"],
              maxWidth: [null, null, 1190],
              margin: "auto",
              justifyContent: "space-between"
            }}>
            {data.map((vl, idx) => (
              <RoadMapItem {...vl} key={idx} />
            ))}
          </Flex>
        </Box>
      </Flex>
      <Circle />
      <Net />
    </Box>
  );
};

const RoadMapItem: React.FC<{
  idxPhrase: number;
  title: string;
  content: string;
}> = ({ idxPhrase, title, content }) => {
  return (
    <Box
      sx={{
        my: [40],
        mx: [81, 81, null, 10],
        maxWidth: [null, null, null, 250]
      }}>
      <Box sx={{ mb: [30, 30, null, 0], ml: -25 }}>
        <Title
          url={`/assets/images/phrase-${idxPhrase}.svg`}
          backgroundPosition="start"
          height={[35, 35, null, 16]}
        />
      </Box>
      <Box
        as="h2"
        variant="text.roadmap"
        sx={{ minWidth: [null, null, null, 300] }}>
        {title}
      </Box>
      <br />
      <Box as="p">
        <span sx={{ color: "secondary" }}>▷ </span> {content}
      </Box>
    </Box>
  );
};
const Circle = () => (
  <Box
    sx={{
      display: ["none", null, null, "block"],
      position: "absolute",
      bottom: "10%",
      margin: "auto",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1
    }}>
    <img src="/assets/images/circles.svg" alt="" />
  </Box>
);

const Net = () => (
  <Box
    sx={{
      display: ["none", null, null, "block"],
      position: "absolute",
      bottom: -140,
      margin: "auto",
      left: "50%",
      transform: "translateX(-50%)"
    }}>
    <img src="/assets/images/net.svg" alt="" />
  </Box>
);

export default Roadmap;
