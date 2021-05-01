import BaseLayout from "../components/layout/baselayout";
import Head from "next/head";
import ThemeProvider from "../components/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BaseLayout>
        <Head>
          <link rel="stylesheet" type="text/css" href="/css/all.css" />
        </Head>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default MyApp;
