/** @jsxImportSource theme-ui */

import React, { ReactNode } from "react";
import { Box, Flex, Grid } from "theme-ui";
import Title from "./Title";

const data = [
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO"
  },
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO"
  },
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO"
  },
  {
    image: "/assets/images/chandung.png",
    name: "Bach Zim",
    position: "CMO"
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
const NameCard: React.FC<{ name: string; position: string; image: string }> = ({
  name,
  position,
  image
}) => {
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
          alignItems: "center"
        }}>
        <img
          src={image}
          alt=""
          sx={{
            ml: "5%",
            width: [280, null, null, 140],
            height: "auto",
            borderRadius: 3
          }}
        />
      </Flex>
      <Name name={name} position={position} />
    </Box>
  );
};

const Name = ({ name, position }: { name: string; position: string }) => (
  <Box sx={{ textAlign: "center" }}>
    <Box as="p">{name}</Box>
    <Box as="p" sx={{ color: "secondary", fontSize: "smaller" }}>
      {position}
    </Box>
  </Box>
);
export default Team;
