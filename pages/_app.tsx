/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

// import { theme } from "../lib/theme";
import { theme } from "../theme/theme";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MenuProvider } from "../context/MenuContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Navbar />
        <main
          sx={{
            variant: "layout.main"
          }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </MenuProvider>
    </ThemeProvider>
  );
}
