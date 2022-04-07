import Head from "next/head";
import { Suspense, useState } from "react";
import Collections from "../components/Collections";
import Features from "../components/Features";
import Modal from "../components/Modal/Modal";
import Roadmap from "../components/Roadmap";
import Story from "../components/Story";
import Team from "../components/Team";
import Trailer from "../components/Trailer";
import { ModalProvider } from "../context/ModalContext";

export default function Page() {
  return (
    <ModalProvider>
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
    </ModalProvider>
  );
}
