import { url } from "inspector";
import mitt from "next/dist/shared/lib/mitt";
import React, { useEffect } from "react";
import { Box, Card, Flex, Grid, Image } from "theme-ui";
import { Size, useWindowSize } from "../hooks/useWindowSize";
import Title from "./Title";

type Props = {};

const data = [
  "/assets/nft-1.png",
  "/assets/nft-2.png",
  "/assets/nft-3.png",
  "/assets/nft-4.png",
  "/assets/nft-5.png"
];

const Collections = (props: Props) => {
  const size: Size = useWindowSize();
  return (
    <Box
      as="section"
      variant="layout.section"
      sx={{ textAlign: "center", maxWidth: 1190, overflow: "hidden" }}>
      <Box sx={{ my: 30 }}>
        <Title url="/assets/collection.svg" width={492} />
      </Box>
      <Box as="p" variant="text.p" sx={{ mb: 72 }}>
        A collection of 8888 Avatar NFTs represents 8888 first galactic citizens
        of Star Venture <br />
        metaverse. They are the elites of their kind and hold unique bonuses in
        the game.
      </Box>

      {size && size.width > 980 ? (
        <>
          <Flex sx={{ justifyContent: "space-between", mt: 74 }}>
            <CollectionCard url="/assets/nft-1.png" />
            <CollectionCard url="/assets/nft-2.png" />
            <CollectionCard url="/assets/nft-3.png" />
          </Flex>
          <Flex sx={{ justifyContent: "space-evenly", mt: 74 }}>
            <CollectionCard url="/assets/nft-4.png" />
            <CollectionCard url="/assets/nft-5.png" />
          </Flex>
        </>
      ) : (
        <Box sx={{ display: "flex", gap: "41px" }}>
          {data.map((vl: string, idx: number) => (
            <CollectionCard url={vl} key={idx} />
          ))}
        </Box>
      )}
    </Box>
  );
};

const CollectionCard: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Card
      variant="layout.card"
      sx={{
        maxWidth: 350,
        height: "auto"
      }}>
      <Image src={url} sx={{ width: "100%" }} />
    </Card>
  );
};
export default Collections;
