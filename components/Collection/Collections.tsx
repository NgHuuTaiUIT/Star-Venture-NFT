import { url } from "inspector";
import mitt from "next/dist/shared/lib/mitt";
import React, { useContext, useEffect } from "react";
import { Box, Card, Flex, Grid } from "theme-ui";
import { Size, useWindowSize } from "../../hooks/useWindowSize";
import Carousel from "../Carousel/Carousal";
import Section from "../Section/Section";
import Title from "../Title/Title";
import { collectionCardStyle, collectionStyle } from "./style";
import { useSpring, animated as a, config } from "react-spring";
import { ScrollToSectionContext } from "../../context/ScrollToSectionProvider";
import Image from "next/image";

const data = [
  "/assets/images/nft-1.webp",
  "/assets/images/nft-2.webp",
  "/assets/images/nft-3.webp",
  "/assets/images/nft-4.webp",
  "/assets/images/nft-5.webp"
];

const Collections = ({
  compRef
}: {
  compRef: React.RefObject<HTMLElement>;
}) => {
  const size: Size = useWindowSize();
  const { showCollection } = useContext(ScrollToSectionContext);

  const collectionSpringProps = useSpring({
    opacity: showCollection ? 1 : -2,
    // marginTop: showCollection ? 0 : -500,
    config: config.molasses
  });

  return (
    <section ref={compRef}>
      <Section styles={{ mt: ["4rem", , "5rem"] }}>
        <Box sx={collectionStyle}>
          <Box sx={{ mt: ["4rem", , , 30] }}>
            <Title
              title="Collection"
              fontSize={[36, 48]}
              letterSpacing={[1, 10]}
            />
          </Box>
          <a.div style={collectionSpringProps}>
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
                  <CollectionCard url="/assets/images/nft-1.webp" />
                  <CollectionCard url="/assets/images/nft-2.webp" />
                  <CollectionCard url="/assets/images/nft-3.webp" />
                </Flex>
                <Flex sx={{ justifyContent: "space-evenly", mt: 74 }}>
                  <CollectionCard url="/assets/images/nft-4.webp" />
                  <CollectionCard url="/assets/images/nft-5.webp" />
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
          </a.div>
        </Box>
      </Section>
    </section>
  );
};

const CollectionCard: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Card sx={collectionCardStyle}>
      <Image src={url} alt="collection card" width={270} height={352} />
    </Card>
  );
};
export default Collections;
