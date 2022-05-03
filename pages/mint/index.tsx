import { useState } from "react";
import { Button } from "theme-ui";
import HighScore from "../../components/Mint/HighScore";
import Mint from "../../components/Mint/Mint";
import Modal from "../../components/Modal/Modal";
import Section from "../../components/Section/Section";
import PrivateDay from "./[query]";

export default function Page() {
  return (
    <Section styles={{ mt: "3rem", minHeight: "28rem" }}>
      <Mint />
    </Section>
  );
}
