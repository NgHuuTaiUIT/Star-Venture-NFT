import React from "react";
import { Box, Flex, Image } from "theme-ui";
import Title from "./Title";

type Props = {};

const Roadmap = (props: Props) => {
  return (
    <Flex
      as="section"
      variant="styles.section"
      sx={{
        backgroundImage: "url(/assets/bg-roadmap.png)",
        maxWidth: 1920,
        height: 819,
        flexDirection: "column",
        mt: 100
      }}>
      <Box sx={{ mt: 52 }}>
        <Title url="/assets/roadmap.svg" width={379} />
      </Box>
    </Flex>
  );
};

export default Roadmap;
