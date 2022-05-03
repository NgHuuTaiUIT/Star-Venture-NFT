import { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

export default function Document() {
  return (
    <Html>
      <Head />
      <meta name="viewport" content="user-scalable=no, shrink-to-fit=no"></meta>

      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      /> */}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="preload"
        href="/fonts/PilotCommand/PilotCommand-qZWJ0.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/PilotCommand/style.css"
        as="stylesheet"
        crossOrigin="true"
      />

      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
