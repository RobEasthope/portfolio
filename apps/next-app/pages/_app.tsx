import Head from "next/head";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

// Tailwind CSS
import "styles/tailwind-globals.css";

// UI styles
import "ui-pkg/styles/styles.css";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/jpv8zzo.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
