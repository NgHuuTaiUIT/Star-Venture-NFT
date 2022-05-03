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
import Trailer from "../components/Trailer/Trailer";
import { ScrollToSectionContext } from "../context/ScrollToSectionProvider";
import { useSpring, animated as a } from "react-spring";
import { OrbitControls } from "@react-three/drei";
import Net from "../components/Roadmap/Net";
import { Canvas } from "@react-three/fiber";
import { netStyle } from "../components/Roadmap/style";
import { Box } from "theme-ui";

export default function Page() {
  return (
    <>
      <Suspense fallback={"...."}>
        <Box sx={netStyle}>
          <Canvas
            id="app"
            style={{
              width: "1920px",
              height: "800px",
              margin: "auto",
              "-webkit-mask-image":
                " radial-gradient(ellipse 40% 88% at 50% 50%, black 23%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 40% 88% at 50% 50%, black 23%, transparent 75%)"
            }}
            camera={{ fov: 75, position: [-0.5, 0.5, 1] }}>
            <OrbitControls />
            <Net />
          </Canvas>
        </Box>
      </Suspense>
    </>
  );
}
