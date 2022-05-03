/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

// import { theme } from "../lib/theme";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ContextProvider } from "../context/ContextProvider";
import { theme } from "../theme/theme";

// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Navbar />
        <main
          sx={{
            variant: "layout.main"
          }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ContextProvider>
    </ThemeProvider>
  );
}
