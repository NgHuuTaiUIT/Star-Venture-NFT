/** @jsxImportSource theme-ui */

import React, { ReactNode } from "react";
import { Box, Flex, Progress, Text } from "theme-ui";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import Title from "../Title/Title";
import Modal from "./Modal";
import {
  privateDaysContainerStyle,
  numberWrapperStyle,
  progressWrapperStyle
} from "./styles";
type Props = {
  children?: ReactNode;
};

const PrivateDayTime: React.FC<Props> = () => {
  return (
    <Box sx={privateDaysContainerStyle}>
      <Title
        title="private"
        letterSpacing={[1]}
        fontSize={[40, 30]}
        style={{ width: "234px", ml: 0, mt: 30, textTransform: "none" }}
      />
      <Title
        title="sale"
        letterSpacing={[1]}
        fontSize={[40, 30]}
        style={{
          textTransform: "none",
          width: "234px",
          ml: 0,
          mt: -30
        }}
      />
      <Box sx={numberWrapperStyle}>
        <Box
          as="h1"
          variant="text.roadmap"
          sx={{ fontSize: "4rem", lineHeight: "4rem", fontWeight: "400" }}>
          03
        </Box>
        <Box
          as="h2"
          variant="text.roadmap"
          sx={{ fontSize: "2rem", mb: "0.7rem" }}>
          DAYS
        </Box>
      </Box>
      <Text sx={{ lineHeight: "3rem" }}>12:34:56</Text>
    </Box>
  );
};

const ProgressBar = ({ value, max }: { value: any; max: any }) => {
  return (
    <Box
      sx={{
        ...progressWrapperStyle
      }}>
      <Progress
        value={value}
        max={max}
        sx={{
          borderRadius: 0
        }}
      />
    </Box>
  );
};

const PrivateDay: React.FC<Props> = () => {
  return (
    <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
      <PrivateDayTime />
      <Modal>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "2rem"
          }}>
          <Title
            title="Make your own"
            fontSize={[36, 36]}
            letterSpacing={[1, 1]}
          />
          <Text
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "27px",
              letterSpacing: "0px"
            }}>
            Price: 0.008 ETH • Mint/wallet: 2
          </Text>
          <Box>
            <Flex sx={{ justifyContent: "space-between", mb: "1rem" }}>
              <span sx={{ textAlign: "left" }}>Total NFTs</span>
              <span sx={{ textAlign: "right" }}>Total NFTs</span>
            </Flex>
            <ProgressBar max={1} value={1 / 3} />
          </Box>

          <Box sx={{ maxWidth: "50%", m: "auto" }}>
            <CustomWalletMultiButton />
            <span>Something went wrong</span>
          </Box>
        </Flex>
      </Modal>
    </Flex>
  );
};

export default PrivateDay;
