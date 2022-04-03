/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

import { theme } from "../lib/theme";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main
        sx={{
          padding: 3,
          borderRadius: 1,
          maxWidth: 1100,
          mx: "auto"
        }}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
