import BaseLayout from "../components/layout/baselayout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/all.css" />
      </Head>
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </BaseLayout>
  );
}

export default MyApp;
