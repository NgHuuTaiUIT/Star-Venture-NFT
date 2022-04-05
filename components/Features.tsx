import React from "react";
import { start } from "repl";
import { Box, Flex } from "theme-ui";
import Title from "./Title";

type Props = {};

const data = [
  {
    idx: 1,
    direction: "left",
    text: `Avatar holders can get early boarding to first game version "Boarding"`
  },
  {
    idx: 2,
    direction: "left",
    text: `Avatars with unique rarities hold different in-game bonuses`
  },
  {
    idx: 3,
    direction: "right",
    text: `Stake avatars to get $STARV`
  },
  {
    idx: 4,
    direction: "right",
    text: `Avatar holders will be selected for later whitelist pre-sale/public rounds/land sale.`
  }
];

const Features = (props: Props) => {
  return (
    <Box
      as="section"
      variant="styles.section"
      sx={{ textAlign: "center", maxWidth: 1140 }}>
      <Box sx={{ py: 30 }}>
        <Title url="/assets/features.svg" width={397} />
      </Box>
      <Flex sx={{ gap: 100 }}>
        <Box>
          {data.slice(0, 2).map((item, index) => {
            return <FeatureItem key={index} {...item} />;
          })}
        </Box>
        <Box>
          {data.slice(-2).map((item, index) => {
            return <FeatureItem key={index} {...item} />;
          })}
        </Box>
      </Flex>
    </Box>
  );
};

type FeatureItemProps = {
  idx: number;
  direction: string;
  text: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ idx, direction, text }) => {
  return (
    <Flex
      sx={{
        flexDirection: direction === "right" && "row-reverse",
        pt: 45,
        minHeight: 120,
        alignItems: "start",
        textAlign: "start",
        gap: 20
      }}>
      <img src={`/assets/0${idx}.svg`} alt="" />
      <Flex sx={{ flexDirection: "column" }}>
        {direction === "left" ? (
          <>
            <img src={`/assets/vector-${direction}.png`} alt="" />
          </>
        ) : (
          <>
            <img src={`/assets/vector-${direction}.png`} alt="" />
          </>
        )}
        <Box
          as="p"
          sx={{
            variant: "text.display",
            maxWidth: 420,
            minWidth: 400,
            px: 10
          }}>
          {text}
        </Box>
      </Flex>
    </Flex>
  );
};
export default Features;
