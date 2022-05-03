/** @jsxImportSource theme-ui */

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Box, Flex, Image } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import Section from "../Section/Section";
import Title from "../Title/Title";
const Net = React.lazy(() => import("./Net")); // Lazy-loaded

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
    <section ref={compRef}>
      <Section styles={{ mt: ["4rem", , "5rem"] }}>
        <Box sx={containerStyle}>
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
          <Suspense fallback={"...."}>
            <Box sx={netStyle}>
              <Canvas
                id="app"
                style={{
                  width: "1920px",
                  height: "800px",
                  margin: "auto",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 40% 88% at 50% 50%, black 23%, transparent 75%)",
                  maskImage:
                    "radial-gradient(ellipse 40% 88% at 50% 50%, black 23%, transparent 75%)"
                }}
                camera={{
                  fov: 45,
                  position: [-0.5, 0.5, 1],
                  near: 0.1,
                  far: 100,
                  aspect: 0.5
                }}>
                <Net />
              </Canvas>
            </Box>
          </Suspense>
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
const Circle = () => (
  <>
    <Box sx={circleStyle}>
      <img src="/assets/images/circles.svg" alt="" />
    </Box>
  </>
);

// const Net = () => {
//   const size: Size = useWindowSize();

//   return (
//     <Box sx={netStyle}>
//       <Canvas
//         id="app"
//         style={{
//           position: "fixed",
//           top: "0",
//           left: "0",
//           width: "100vw",
//           height: "100vh"
//         }}>
//         <Net />
//       </Canvas>
//     </Box>
//   );
// };

export default Roadmap;
