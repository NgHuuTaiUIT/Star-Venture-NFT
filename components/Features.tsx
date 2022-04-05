/** @jsxImportSource theme-ui */
import React from "react";
import { start } from "repl";
import { Box, Flex, Grid } from "theme-ui";
import { Size, useWindowSize } from "../hooks/useWindowSize";
import Title from "./Title";

type Props = {};

const data = [
  {
    idx: 1,
    direction: "left",
    text: `Avatar holders can get early boarding to first game version "Boarding"`
  },
  {
    idx: 3,
    direction: "right",
    text: `Stake avatars to get $STARV`
  },
  {
    idx: 2,
    direction: "left",
    text: `Avatars with unique rarities hold different in-game bonuses`
  },
  {
    idx: 4,
    direction: "right",
    text: `Avatar holders will be selected for later whitelist pre-sale/public rounds/land sale.`
  }
];

const Features = (props: Props) => {
  return (
    <Box as="section" variant="layout.section" sx={{ textAlign: "center" }}>
      <Box sx={{ py: 30 }}>
        <Title url="/assets/images/features.svg" width={397} />
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
            pt: 40,
            minHeight: 120,
            alignItems: "start",
            textAlign: "start",
            gap: 20
          }}>
          <img src={`/assets/images/0${idx}.svg`} alt="" />
          <Flex sx={{ flexDirection: "column" }}>
            <img src={`/assets/images/vector-${direction}.png`} alt="" />
            <Box
              as="p"
              sx={{
                variant: "text.p",
                maxWidth: 420,
                minWidth: 400,
                px: 10
              }}>
              {text}
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Flex
          sx={{
            pt: 45,
            minHeight: 120,
            alignItems: "start",
            textAlign: "start",
            gap: 20,
            flexDirection: "column"
          }}>
          <img
            src={`/assets/images/0${idx}.svg`}
            alt=""
            sx={{ ml: 50, mb: 10, height: [48, null, null, 32] }}
          />
          <Flex sx={{ flexDirection: "column", width: "100%" }}>
            <img src={`/assets/images/vector-left.png`} alt="" />
            <Box
              as="p"
              sx={{
                variant: "text.p",
                maxWidth: 420,
                minWidth: "100%",
                px: 10,
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
