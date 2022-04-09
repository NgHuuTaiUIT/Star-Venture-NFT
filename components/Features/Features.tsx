/** @jsxImportSource theme-ui */
import React from "react";
import { start } from "repl";
import { Box, Flex, Grid, Image } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import { descriptionStyle, widgetFeaturesStyle } from "./style";
import Title from "../Title/Title";

const data = [
  {
    idx: 1,
    direction: "left",
    text: `Avatar holders can get early boarding to first game version "Boarding"`
  },
  {
    idx: 2,
    direction: "right",
    text: `Avatars with unique rarities hold different in-game bonuses`
  },
  {
    idx: 3,
    direction: "left",
    text: `Stake avatars to get $STARV`
  },
  {
    idx: 4,
    direction: "right",
    text: `Avatar holders will be selected for later whitelist pre-sale/public rounds/land sale.`
  }
];

const Features = () => {
  return (
    <Box as="section" variant="layout.section" sx={{ textAlign: "center" }}>
      <Box sx={{ py: ["2rem", , , 30] }}>
        <Title
          url="/assets/images/features.svg"
          style={{ height: ["1.8rem"] }}
        />
      </Box>
      <Box variant="layout.features">
        {data.map((item, index) => {
          return <FeatureItem key={index} {...item} />;
        })}
      </Box>
    </Box>
  );
};

type FeatureItemProps = {
  idx: number;
  direction: string;
  text: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ idx, direction, text }) => {
  const size: Size = useWindowSize();
  return (
    <>
      {size && size?.width > 1200 ? (
        <Flex
          sx={{
            flexDirection: direction === "right" && "row-reverse",
            ...widgetFeaturesStyle
          }}>
          <Image src={`/assets/images/0${idx}.svg`} alt="" />
          <Flex sx={{ flexDirection: "column" }}>
            <Image src={`/assets/images/vector-${direction}.png`} alt="" />
            <Box as="p" sx={descriptionStyle}>
              {text}
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Flex
          sx={{
            ...widgetFeaturesStyle,
            pt: 45,
            flexDirection: "column"
          }}>
          <Image
            src={`/assets/images/0${idx}.svg`}
            alt=""
            sx={{ ml: 50, mb: 10, height: ["2.5rem", null, null, 32] }}
          />
          <Flex sx={{ flexDirection: "column", width: "100%" }}>
            <Image src={`/assets/images/vector-left.png`} alt="" />
            <Box
              as="p"
              sx={{
                ...descriptionStyle,
                minWidth: "100%",
                pl: 50
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
