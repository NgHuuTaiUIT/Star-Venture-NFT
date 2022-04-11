/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Flex, Image } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import Title from "../Title/Title";
import {
  circleStyle,
  containerStyle,
  netStyle,
  titleStyle,
  widgetRoadmapItemStyle,
  wrapRoadmapItemStyle,
  wrapStyle
} from "./style";

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
    <Box as="section" sx={containerStyle}>
      <Flex as="section" sx={wrapStyle}>
        <Box sx={{ mt: [10, , 60] }}>
          <Box sx={{ mb: ["2.2rem", , , 75] }}>
            <Title
              url="/assets/images/roadmap.svg"
              width={"100%"}
              style={{ height: ["1.5rem", , "1.8rem"] }}
            />
          </Box>
          <Flex sx={wrapRoadmapItemStyle}>
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
    <Box sx={widgetRoadmapItemStyle}>
      <Box sx={{ ml: -25 }}>
        <Title
          url={`/assets/images/phrase-${idxPhrase}.svg`}
          backgroundPosition="start"
          height={[16]}
        />
      </Box>
      <Box as="h2" sx={titleStyle}>
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
  <Box sx={circleStyle}>
    <img src="/assets/images/circles.svg" alt="" />
  </Box>
);

const Net = () => (
  <Box sx={netStyle}>
    <img src="/assets/images/net.svg" alt="" />
  </Box>
);

export default Roadmap;
