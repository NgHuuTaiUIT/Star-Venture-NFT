/** @jsxImportSource theme-ui */
import React from "react";
import { start } from "repl";
import { Box, Flex, Grid, Image, Text, ThemeUICSSObject } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import { descriptionStyle, widgetFeaturesStyle } from "./style";
import Title from "../Title/Title";
import Section from "../Section/Section";
import { useSpring, animated as a, config } from "react-spring";

import {
  MutableRefObject,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import { ScrollToSectionContext } from "../../context/ScrollToSectionProvider";
const data = [
  {
    idx: 1,
    direction: "left",
    text: `Avatar holders can get early boarding to first game version "Boarding"`,
    triangles: "▷ ▷▷"
  },
  {
    idx: 2,
    direction: "right",
    text: `Avatars with unique rarities hold different in-game bonuses`,
    triangles: ""
  },
  {
    idx: 3,
    direction: "left",
    text: `Stake avatars to get $STARV`,
    triangles: ""
  },
  {
    idx: 4,
    direction: "right",
    text: `Avatar holders will be selected for later whitelist pre-sale/public rounds/land sale.`,
    triangles: "▷▷"
  }
];

const Features = ({ compRef }: { compRef: React.RefObject<HTMLElement> }) => {
  const { showFeature } = useContext(ScrollToSectionContext);

  const featureItemLeftProps = useSpring({
    overflow: "hidden",
    opacity: showFeature ? 1 : 0,
    transform: showFeature ? "translateX(0%)" : "translateX(-100%)",
    config: config.molasses,
    delay: 200
  });

  const featureItemRightProps = useSpring({
    overflow: "hidden",
    opacity: showFeature ? 1 : 0,
    transform: showFeature ? "translateX(0%)" : "translateX(100%)",
    config: config.molasses,
    delay: 200
  });

  return (
    <section ref={compRef}>
      <Section styles={{ mt: [0, , "6.8rem"], mb: ["3rem", , "4rem"] }}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mb: ["3.5rem"] }}>
            <Title
              title="Features"
              letterSpacing={[10, 10]}
              fontSize={[36, 48]}
            />
          </Box>
          <Box
            variant="layout.features"
            sx={{ maxWidth: "container90", mx: "auto", overflow: "hidden" }}>
            {data.map((item, index) => {
              return (
                <a.div
                  key={index}
                  style={
                    index % 2 == 0
                      ? { ...featureItemLeftProps }
                      : { ...featureItemRightProps }
                  }>
                  <FeatureItem
                    {...item}
                    style={
                      index % 2 !== 0 ? { justifyContent: "flex-end" } : null
                    }
                  />
                </a.div>
              );
            })}
          </Box>
        </Box>
      </Section>
    </section>
  );
};

const Triangles = ({ triangles }: { triangles: string }) => {
  return (
    <Text
      sx={{
        position: "absolute",
        top: -25,
        right: "5%",
        color: "secondary"
      }}>
      {triangles}
    </Text>
  );
};

type FeatureItemProps = {
  idx: number;
  direction: string;
  text: string;
  triangles?: string;
  style?: ThemeUICSSObject | null;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  idx,
  direction,
  text,
  triangles = "",
  style
}) => {
  const size: Size = useWindowSize();
  return (
    <>
      {size && size?.width > 1000 ? (
        <Flex
          sx={{
            flexDirection: direction === "right" && "row-reverse",
            ...widgetFeaturesStyle,
            px: [0, , "1rem"],
            ...style
          }}>
          <Image src={`/assets/images/0${idx}.svg`} alt="" />
          <Flex sx={{ flexDirection: "column", flexWrap: "nowrap" }}>
            <Box sx={{ position: "relative" }}>
              <Triangles triangles={triangles} />
              <Image src={`/assets/images/vector-${direction}.webp`} alt="" />
            </Box>
            <Box
              as="p"
              sx={{
                ...descriptionStyle,
                pl: idx % 2 !== 0 ? "1.5rem" : "0rem"
              }}>
              {text}
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Flex
          sx={{
            ...widgetFeaturesStyle,
            // pt: "2.8rem",
            flexDirection: "column"
          }}>
          <Image
            src={`/assets/images/0${idx}.svg`}
            alt=""
            sx={{
              ml: "1.8rem",
              height: ["1.8rem", null, null, 32]
            }}
          />
          <Flex sx={{ flexDirection: "column", width: "100%" }}>
            <Image src={`/assets/images/vector-left.webp`} alt="" />
            <Box
              as="p"
              sx={{
                ...descriptionStyle,
                maxWidth: "100%",
                ml: "1.2rem"
              }}>
              {text}
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};
export default Features;
