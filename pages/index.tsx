import Head from "next/head";
import Navbar from "../components/Navbar";
import Story from "../components/Story";

export default function Page() {
  return (
    <>
      <Head>
        <title>Next.js Theme UI</title>
      </Head>
      <Navbar />
      <Story />
    </>
  );
}
