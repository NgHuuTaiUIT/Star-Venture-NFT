/** @jsxImportSource theme-ui */
import React from "react";
import { start } from "repl";
import { Box, Flex, Grid, Image, Text } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import { descriptionStyle, widgetFeaturesStyle } from "./style";
import Title from "../Title/Title";
import Section from "../Section/Section";

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

const Features = () => {
  return (
    <Section>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ mb: ["3.5rem"] }}>
          <Title
            title="Features"
            letterSpacing={[10, 10]}
            fontSize={[36, 48]}
          />
        </Box>
        <Box variant="layout.features">
          {data.map((item, index) => {
            return <FeatureItem key={index} {...item} />;
          })}
        </Box>
      </Box>
    </Section>
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
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  idx,
  direction,
  text,
  triangles = ""
}) => {
  const size: Size = useWindowSize();
  return (
    <>
      {size && size?.width > 1000 ? (
        <Flex
          sx={{
            flexDirection: direction === "right" && "row-reverse",
            ...widgetFeaturesStyle,
            px: [0, , "2rem"]
          }}>
          <Image src={`/assets/images/0${idx}.svg`} alt="" />
          <Flex sx={{ flexDirection: "column", flexWrap: "nowrap" }}>
            <Box sx={{ position: "relative" }}>
              <Triangles triangles={triangles} />
              <Image src={`/assets/images/vector-${direction}.png`} alt="" />
            </Box>
            <Box as="p" sx={descriptionStyle}>
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
            <Image src={`/assets/images/vector-left.png`} alt="" />
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
