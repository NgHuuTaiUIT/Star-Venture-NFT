import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense, useContext } from "react";
import Collections from "../components/Collection/Collections";
import Features from "../components/Features/Features";
import Modal from "../components/Modal/Modal";
import Roadmap from "../components/Roadmap/Roadmap";
import Story from "../components/Story/Story";
import Team from "../components/Team/Team";
import { ScrollToSectionContext } from "../context/ScrollToSectionProvider";

const Trailer = dynamic(() => import("../components/Trailer/Trailer"));
// export async function getServerSideProps({ req, res }) {
//   res.setHeader("set-cookie", "cookie2=value2; SameSite=None; Secure");

//   return {
//     props: {}
//   };
// }
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
      <Trailer
        url="http://www.youtube.com/embed/2x7bn0hG70k?autoplay=1&mute=1&loop=1&playlist=2x7bn0hG70k"
        compRef={trailerOnClickRef}
      />
      <Features compRef={featureOnClickRef} />
      <Collections compRef={collectionOnClickRef} />
      <Roadmap compRef={roadmapOnClickRef} />
      <Team compRef={teamOnClickRef} />
      <Modal />
    </>
  );
}
