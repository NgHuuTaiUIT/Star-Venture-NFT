/** @jsxImportSource theme-ui */

import React, { Suspense } from "react";
import { animated as a, config, useSpring } from "react-spring";
import { Box, Flex, ThemeUIStyleObject } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import { LinearBackground } from "../LinearBackground/LinearBackground";
import Section from "../Section/Section";
import Title from "../Title/Title";
import { NetV2 } from "./NetV2";

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

const Roadmap = ({ compRef }: { compRef: React.RefObject<HTMLElement> }) => {
  const size: Size = useWindowSize();
  return (
    <section ref={compRef} sx={{ position: "relative" }}>
      <LinearBackground
        top={"10%"}
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
          display: ["block", , , "none"]
        }}
        rotation={-180}
      />
      <Section
        styles={{
          mt: ["4rem", , "5rem"],
          position: "relative",
          zIndex: 0,
          maxWidth: [
            "100vw !important",
            ,
            "90vw !important",
            "100vw !important"
          ]
        }}>
        <Box sx={containerStyle}>
          {/* <LinearBackground
            top={0}
            style={{ width: "100%", height: "805px", zIndex: -1 }}
          /> */}

          <LinearBg
            top={0}
            left={0}
            style={{ display: ["none", , , "block"] }}
          />
          <LinearBg
            rotation={-180}
            right={0}
            style={{ display: ["none", , , "block"] }}
          />
          <Flex sx={wrapStyle}>
            <Box sx={{ mt: ["1rem", , "4.3rem"] }}>
              <Box sx={{ mb: ["1.3rem", , "3rem"] }}>
                <Title
                  title="Roadmap"
                  letterSpacing={[10, 10]}
                  fontSize={[36, 48]}
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
          <NetV2 />
        </Box>
      </Section>
    </section>
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
const Circle = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: {
      transform: "translateX(0%)"
    },
    to: { transform: "translateX(-50%)" },
    config: { ...config.molasses, duration: 20000 }
  });
  return (
    <>
      <Box
        sx={{
          left: "0%",
          width: "100%",
          height: 250,
          position: "absolute",
          bottom: "10%",
          zIndex: 1
        }}>
        <Box
          sx={{
            ...circleStyle,
            background:
              "linear-gradient(90deg, #12192C 6.01%, rgba(18, 25, 44, 0) 15%),linear-gradient(90deg, rgba(18, 25, 44, 0) 80%,  #12192C 95%)",
            width: "100%",
            height: "100%",
            bottom: 0,
            zIndex: 2
          }}
        />
        <Box
          sx={{
            ...circleStyle,
            height: "100%",
            width: "90%",
            overflow: "hidden"
          }}>
          <a.div
            style={styles}
            sx={{
              backgroundImage: "url(/assets/images/circles.svg)",
              height: "100%",
              width: "200%",
              maxHeight: 220,
              position: "absolute",
              bottom: 0,
              zIndex: 1
            }}></a.div>
        </Box>
      </Box>
    </>
  );
};

const LinearBg = ({
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
      height: "100%",
      width: "30%",
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
export default Roadmap;
