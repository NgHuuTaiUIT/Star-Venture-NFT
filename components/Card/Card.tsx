import React from "react";
import { Flex } from "theme-ui";

type Props = {};

const Card = (props: Props) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundImage: "url(/assets/images/bg-popup-mb.png)"
      }}></Flex>
  );
};

export default Card;
