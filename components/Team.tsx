/** @jsxImportSource theme-ui */

import React, { ReactNode, useContext } from "react";
import { Box, Button, Flex, Grid, Image, Link } from "theme-ui";
import { ModalContext } from "../context/ModalContext";
import { ModalContentProps } from "./Modal/Modal";
import Title from "./Title";

const data = [
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO",
    content: `Star Venture is a decentralized MMORPG built on “Chain name”. Get onboard into an ever-expanding space journey. Socialize-to-earn in a community-driven universe where battles explode, enterprises rise, governments fall. Be ready for takeoff, captain.
The path is for you to choose.`
  },
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO",
    content: `Star Venture is a decentralized MMORPG built on “Chain name”. Get onboard into an ever-expanding space journey. Socialize-to-earn in a community-driven universe where battles explode, enterprises rise, governments fall. Be ready for takeoff, captain.
The path is for you to choose.`
  },
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO",
    content: `Star Venture is a decentralized MMORPG built on “Chain name”. Get onboard into an ever-expanding space journey. Socialize-to-earn in a community-driven universe where battles explode, enterprises rise, governments fall. Be ready for takeoff, captain.
The path is for you to choose.`
  },
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO",
    content: `Star Venture is a decentralized MMORPG built on “Chain name”. Get onboard into an ever-expanding space journey. Socialize-to-earn in a community-driven universe where battles explode, enterprises rise, governments fall. Be ready for takeoff, captain.
The path is for you to choose.`
  }
];

const Team = () => {
  return (
    <Flex
      as="section"
      variant="layout.section"
      sx={{
        flexDirection: ["column"],
        alignItems: "center",
        mt: 85
      }}>
      <Box>
        <Title
          url="/assets/images/team.svg"
          height={[51, null, null, 32]}
          width={216}
          minWidth={[380, , , 0]}
        />
      </Box>
      <Grid
        columns={[1, null, null, 4]}
        sx={{
          gap: [0, , , 130],
          mt: 65
        }}>
        {data.map(vl => (
          <NameCard {...vl} key={vl.name} />
        ))}
      </Grid>
    </Flex>
  );
};
const NameCard: React.FC<{
  name: string;
  position: string;
  image: string;
  content: string;
}> = ({ name, position, image, content }) => {
  const { setModalContent, openModal } = useContext(ModalContext);

  const setDataModal = () => {
    setModalContent({
      name,
      position,
      image,
      content
    });
    openModal();
  };

  return (
    <Box
      sx={{
        minHeight: [560, null, null, 280]
      }}>
      <Flex
        sx={{
          maxWidth: "container90",
          color: "transparent",
          margin: "0 auto",
          background: "url(/assets/images/Union.svg) no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          width: [360, , , 179],
          height: [380, , , 189],
          overflow: "hidden",
          padding: "26px 14px 22px 24px",
          justifyContent: "center",
          alignItems: "center",
          ":hover": { "& #member-detail": { opacity: "1" } }
        }}>
        <Box sx={{ position: "relative" }}>
          <Image
            src={image}
            alt=""
            sx={{
              width: [280, null, null, 140],
              height: "auto",
              borderRadius: 3
            }}
          />
          <Flex
            id="member-detail"
            sx={{
              // width: [280, null, null, 140],
              // height: [280, null, null, 140],
              opacity: "0",
              position: "absolute",
              bg: "secondary",
              width: "100%",
              height: "100%",
              zIndex: 98,
              top: 0,
              m: "auto",
              justifyContent: "center",
              alignItems: "center",
              transition: "opacity 0.3s ease"
            }}>
            <Link
              as="a"
              sx={{
                color: "primary",
                fontSize: [14],
                fontWeight: 500,
                ":hover": {
                  textDecoration: "underline"
                }
              }}
              onClick={setDataModal}>
              VIEW DETAIL
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Name name={name} position={position} />
    </Box>
  );
};

const Name = ({ name, position }: { name: string; position: string }) => (
  <Box sx={{ textAlign: "center", fontSize: [36, 36, , 18] }}>
    <Box as="p">{name}</Box>
    <Box as="p" sx={{ color: "secondary", fontSize: "smaller" }}>
      {position}
    </Box>
  </Box>
);
export default Team;
