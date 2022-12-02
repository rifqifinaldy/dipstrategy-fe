import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme.style";
import { BasicLayout } from "../layout/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Dipstrategy FE-RifqiF</title>
        <meta name="description" content="Rifqi F Dipstrategy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ThemeProvider>
  );
}
