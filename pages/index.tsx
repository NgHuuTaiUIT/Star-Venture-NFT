import {
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import {
  MutableRefObject,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import Collections from "../components/Collection/Collections";
import Features from "../components/Features/Features";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import Roadmap from "../components/Roadmap/Roadmap";
import Story from "../components/Story/Story";
import Team from "../components/Team/Team";
import { ScrollToSectionContext } from "../context/ScrollToSectionProvider";
import { useSpring, animated as a } from "react-spring";
import dynamic from "next/dynamic";

const Trailer = dynamic(() => import("../components/Trailer/Trailer"));

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
        <title>Star Venture - Ever Expanding Space Journey</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.webp" />
      </Head>
      <Story />
      <Suspense fallback={"Loadding..."}>
        <Trailer
          url="https://www.youtube.com/embed/2x7bn0hG70k?autoplay=1&mute=1&loop=1&playlist=2x7bn0hG70k"
          compRef={trailerOnClickRef}
        />
      </Suspense>
      <Features compRef={featureOnClickRef} />
      <Collections compRef={collectionOnClickRef} />
      <Roadmap compRef={roadmapOnClickRef} />
      <Team compRef={teamOnClickRef} />
      <Modal />
    </>
  );
}
