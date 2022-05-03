/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import Section from "../Section/Section";
import Title from "../Title/Title";
import HighScore from "./HighScore";
import Modal from "./Modal";
import PrivateDay from "./PrivateDays";
import * as styles from "./styles";
import WhiteList from "./WhiteList";

type Props = {};

const Mint = (props: Props) => {
  return (
    <Section styles={{ mt: "3rem" }}>
      <section sx={{ mb: "10rem" }}>
        <PrivateDay />
      </section>
      <section sx={{ mb: "10rem" }}>
        <WhiteList />
      </section>{" "}
      <section sx={{ mb: "10rem" }}>
        <HighScore />
      </section>
    </Section>
  );
};

export default Mint;
