import React from "react";
import { Box, jsx } from "theme-ui";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        color: "#fff",
        p: 4,
        fontFamily: "Ubuntu"
      }}>
      Hello
    </Box>
  );
};

export default Navbar;
