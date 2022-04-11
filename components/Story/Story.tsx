/** @jsxImportSource theme-ui */

import React, { useState } from "react";
import { Box, Button, Flex, Image } from "theme-ui";
import {
  boxStoryStyle,
  buttonStyle,
  containerStoryStyle,
  textStoryStyle
} from "./style";

type Props = {};

const Story = (props: Props) => {
  const [showStory, setShowStory] = useState(false);
  return (
    <Flex as="section" sx={containerStoryStyle}>
      <Image src="/assets/images/logo_star_venture_1.png" alt="logo" />
      <Box sx={boxStoryStyle}>
        <Flex sx={{ overflow: "hidden" }}>
          <Box
            as="p"
            sx={{
              ...textStoryStyle,
              transform: `translateX(-${showStory && 100}%)`
            }}>
            Star Venture is a decentralized MMORPG built on “Chain name”. Get
            onboard into an ever-expanding space journey.
            <br /> Socialize-to-earn in a community-driven universe where
            battles explode, enterprises
            <br />
            rise, governments fall. Be ready for takeoff, captain.
            <br />
            The path is for you to choose.
          </Box>
          {showStory && (
            <Box
              as="p"
              sx={{
                ...textStoryStyle,
                transform: `translateX(-${showStory && 100}%)`
              }}>
              Thousands of years ago, an advanced alien species found Earth and
              laid their first seeds of <br /> destruction. Little did they
              know, humanity fought well, the alien species took off, but they
              left
              <br />
              Fairimium. It’s a game changer for human beings. A perfect matter
              with history that goes beyond <br />
              time and space, even before the Big Bang. With infinite
              applications, human knowledge still only <br />
              goes so far to understand part of it, structured by both living
              cells and atoms. With Fairimium and <br />
              curiosity that fueled the ships, human beings ventured out of
              space. <br />
              Centuries of expanding our frontier, civilization surges as humans
              keep learning on Fairimium. We <br />
              reach the singularity point in space technology, but also in
              conflict with mighty unknown powers… <br />
              All for the Fairimium War.
            </Box>
          )}
        </Flex>

        {!showStory && (
          <Button sx={buttonStyle} onClick={() => setShowStory(pre => !pre)}>
            THE STORY
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Story;
