/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

// import { theme } from "../lib/theme";
import { theme } from "../theme/theme";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <main
        sx={{
          variant: "layout.main"
        }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
