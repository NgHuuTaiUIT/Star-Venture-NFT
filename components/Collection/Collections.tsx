import { url } from "inspector";
import mitt from "next/dist/shared/lib/mitt";
import React, { useEffect } from "react";
import { Box, Card, Flex, Grid, Image } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import Carosel from "../Carousel/Carousal";
import Title from "../Title/Title";
import { collectionCardStyle, collectionStyle } from "./style";

type Props = {};

const data = [
  "/assets/images/nft-1.png",
  "/assets/images/nft-2.png",
  "/assets/images/nft-3.png",
  "/assets/images/nft-4.png",
  "/assets/images/nft-5.png"
];

const Collections = (props: Props) => {
  const size: Size = useWindowSize();
  return (
    <Box as="section" sx={collectionStyle}>
      <Box sx={{ my: ["2rem", , , 30] }}>
        <Title url="/assets/images/collection.svg" width={492} />
      </Box>
      <Box as="p" variant="text.p" sx={{ my: ["4rem", , , "2rem"] }}>
        A collection of 8888 Avatar NFTs represents 8888 first galactic citizens
        of Star Venture <br />
        metaverse. They are the elites of their kind and hold unique bonuses in
        the game.
      </Box>

      {size && size.width > 1200 ? (
        <>
          <Flex sx={{ justifyContent: "space-between", mt: 74 }}>
            <CollectionCard url="/assets/images/nft-1.png" />
            <CollectionCard url="/assets/images/nft-2.png" />
            <CollectionCard url="/assets/images/nft-3.png" />
          </Flex>
          <Flex sx={{ justifyContent: "space-evenly", mt: 74 }}>
            <CollectionCard url="/assets/images/nft-4.png" />
            <CollectionCard url="/assets/images/nft-5.png" />
          </Flex>
        </>
      ) : (
        <Box sx={{ display: "flex", gap: "41px" }}>
          <Carosel>
            {data.map((vl: string, idx: number) => (
              <CollectionCard url={vl} key={idx} />
            ))}
          </Carosel>
        </Box>
      )}
    </Box>
  );
};

const CollectionCard: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Card sx={collectionCardStyle}>
      <Image src={url} />
    </Card>
  );
};
export default Collections;
