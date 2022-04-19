/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import Section from "../Section/Section";
import Title from "../Title/Title";
import Modal from "./Modal";
import PrivateDay from "./PrivateDays";
import ProgressBar from "./Progress";
import * as styles from "./styles";

type Props = {};

const Mint = (props: Props) => {
  return (
    <Section styles={{ mt: "3rem" }}>
      <Modal>
        <PrivateDay />
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
    </Section>
  );
};

export default Mint;
