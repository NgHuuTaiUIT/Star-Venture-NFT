import {
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import { MutableRefObject, Suspense, useContext, useRef } from "react";
import Collections from "../components/Collection/Collections";
import Features from "../components/Features/Features";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import Roadmap from "../components/Roadmap/Roadmap";
import Story from "../components/Story/Story";
import Team from "../components/Team/Team";
import Trailer from "../components/Trailer/Trailer";
import { ScrollToSectionContext } from "../context/ScrollToSectionProvider";

export default function Page() {
  const {
    trailerOnClickRef,
    featureOnClickRef,
    collectionOnClickRef,
    roadmapOnClickRef,
    teamOnClickRef
  } = useContext(ScrollToSectionContext);

  return (
    <>
      <Head>
        <title>Next.js Theme UI</title>
      </Head>
      <Story />
      <Suspense fallback={"Loadding..."}>
        <Trailer
          url="https://www.youtube.com/embed/2x7bn0hG70k?autoplay=1&mute=1&loop=1&playlist=2x7bn0hG70k"
          ref={trailerOnClickRef}
        />
      </Suspense>
      <Features ref={featureOnClickRef} />
      <Collections ref={collectionOnClickRef} />
      <Roadmap ref={roadmapOnClickRef} />
      <Team ref={teamOnClickRef} />
      <Modal />
    </>
  );
}
