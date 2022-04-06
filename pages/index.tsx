import Head from "next/head";
import { Suspense } from "react";
import Collections from "../components/Collections";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Story from "../components/Story";
import Team from "../components/Team";
import Trailer from "../components/Trailer";

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
    </>
  );
}
