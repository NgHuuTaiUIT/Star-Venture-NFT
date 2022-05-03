import {
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import { Suspense } from "react";
import Collections from "../components/Collection/Collections";
import Features from "../components/Features/Features";
import Modal from "../components/Modal/Modal";
import Roadmap from "../components/Roadmap/Roadmap";
import Story from "../components/Story/Story";
import Team from "../components/Team/Team";
import Trailer from "../components/Trailer/Trailer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Next.js Theme UI</title>
      </Head>
      <Story />
      <Suspense fallback={"Loadding..."}>
        <Trailer url="https://www.youtube.com/embed/2x7bn0hG70k?autoplay=1&mute=1&loop=1&playlist=2x7bn0hG70k" />
      </Suspense>
      <Features />
      <Collections />
      <Roadmap />
      <Team />
      <Modal />
    </>
  );
}
