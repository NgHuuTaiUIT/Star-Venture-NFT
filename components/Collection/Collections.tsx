import { url } from "inspector";
import mitt from "next/dist/shared/lib/mitt";
import React, { useEffect } from "react";
import { Box, Card, Flex, Grid, Image } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import Carousel from "../Carousel/Carousal";
import Section from "../Section/Section";
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

const Collections = (props: Props, ref: any) => {
  const size: Size = useWindowSize();
  return (
    <section ref={ref}>
      <Section styles={{ mt: ["4rem", , "5rem"] }}>
        <Box sx={collectionStyle}>
          <Box sx={{ mt: ["4rem", , , 30] }}>
            <Title
              title="Collection"
              fontSize={[36, 48]}
              letterSpacing={[1, 10]}
            />
          </Box>
          <Box
            as="p"
            variant="text.p"
            sx={{
              my: ["2rem", , "1.7rem"],
              maxWidth: ["81%"],
              mx: "auto",
              minHeight: "3rem"
            }}>
            Each LoE NFT is a piece of art that tells an immersive and
            meaningful story of its own.
          </Box>

          {size && size.width > 1200 ? (
            <Box>
              <Flex sx={{ justifyContent: "space-between", mt: 74 }}>
                <CollectionCard url="/assets/images/nft-1.png" />
                <CollectionCard url="/assets/images/nft-2.png" />
                <CollectionCard url="/assets/images/nft-3.png" />
              </Flex>
              <Flex sx={{ justifyContent: "space-evenly", mt: 74 }}>
                <CollectionCard url="/assets/images/nft-4.png" />
                <CollectionCard url="/assets/images/nft-5.png" />
              </Flex>
            </Box>
          ) : (
            <Box sx={{ display: "flex", mt: "3.7rem" }}>
              <Carousel>
                {data.map((vl: string, idx: number) => (
                  <CollectionCard url={vl} key={idx} />
                ))}
              </Carousel>
            </Box>
          )}
        </Box>
      </Section>
    </section>
  );
};

const CollectionCard: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Card sx={collectionCardStyle}>
      <Image src={url} alt="collection card" />
    </Card>
  );
};
export default React.forwardRef(Collections);
