/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Flex, Image } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import Section from "../Section/Section";
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
      " Our artists and game designers have been working closely to deliver quality artwork that comes with different bonuses and rarities. This is gratitude to our early supporters."
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
    <Section optLg={[1, 1, 0, 1]}>
      <Box sx={containerStyle}>
        <Flex sx={wrapStyle}>
          <Box sx={{ mt: ["1rem", , 60] }}>
            <Box sx={{ mb: ["1.3rem", , , 75] }}>
              <Title title="Roadmap" letterSpacing={10} />
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
    </Section>
  );
};

const Phrase = ({
  phrase,
  letterSpacing = 1
}: {
  phrase: string;
  letterSpacing?: any;
}) => {
  return (
    <Box sx={{ textTransform: "uppercase", m: "auto" }}>
      <svg width="100%" height="30" textAnchor="start">
        <defs>
          <linearGradient
            id="phrase"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#A8BBFF" offset="0%" />
            <stop stopColor="rgba(0, 18, 183, 0.88)" offset="118%" />
          </linearGradient>
        </defs>
        <text fill="transparent" stroke="url(#phrase)">
          <tspan
            x="0%"
            y="80%"
            fontFamily="Pilot Command Regular"
            fontSize="24"
            fontWeight="400"
            letterSpacing={letterSpacing}>
            {phrase}
          </tspan>
        </text>
      </svg>
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
      <Box>
        <Phrase phrase={`Phrase ${idxPhrase}`} />
      </Box>
      <Box as="h2" sx={titleStyle}>
        {title}
      </Box>
      <br />
      <Box as="p">
        <span sx={{ color: "secondary" }}>▷ </span>
        {content}
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
