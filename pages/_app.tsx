/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

// import { theme } from "../lib/theme";
import { theme } from "../theme/theme";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main
        sx={{
          variant: "layout.main"
        }}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
