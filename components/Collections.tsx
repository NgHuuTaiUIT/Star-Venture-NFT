import { url } from "inspector";
import mitt from "next/dist/shared/lib/mitt";
import React from "react";
import { Box, Card, Flex, Grid, Image } from "theme-ui";
import Title from "./Title";

type Props = {};

const Collections = (props: Props) => {
  return (
    <Box
      as="section"
      variant="styles.section"
      sx={{ textAlign: "center", maxWidth: 1190 }}>
      <Box sx={{ mb: 30 }}>
        <Title url="/assets/collection.svg" width={492} />
      </Box>
      <Box as="p" variant="text.display">
        A collection of 8888 Avatar NFTs represents 8888 first galactic citizens
        of Star Venture <br />
        metaverse. They are the elites of their kind and hold unique bonuses in
        the game.
      </Box>
      <Flex sx={{ justifyContent: "center", mt: 74, gap: 190 }}>
        <CollectionCard url="/assets/nft-1.png" />
        <CollectionCard url="/assets/nft-2.png" />
        <CollectionCard url="/assets/nft-3.png" />
      </Flex>
      <Flex sx={{ justifyContent: "center", mt: 74, gap: 190 }}>
        <CollectionCard url="/assets/nft-4.png" />
        <CollectionCard url="/assets/nft-5.png" />
      </Flex>
    </Box>
  );
};

const CollectionCard = ({ url }: { url: string }) => {
  return (
    <Card
      sx={{
        maxWidth: 350
      }}>
      <Image src={url} />
    </Card>
  );
};
export default Collections;
