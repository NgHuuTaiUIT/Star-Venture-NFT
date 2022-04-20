/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import Section from "../Section/Section";
import Title from "../Title/Title";
import Modal from "./Modal";
import PrivateDay from "./PrivateDays";
import * as styles from "./styles";
import WhiteList from "./WhiteList";

type Props = {};

const Mint = (props: Props) => {
  return (
    <Section styles={{ mt: "3rem" }}>
      {/* <PrivateDay /> */}
      <WhiteList />
    </Section>
  );
};

export default Mint;
