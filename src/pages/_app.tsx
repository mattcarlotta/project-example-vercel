import Head from "next/head";
import GlobalStylesheet from "~styles/globalStylesheet";
import { AppProps, FC } from "~types";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <div id="app">
      <Component {...pageProps} />
    </div>
    <GlobalStylesheet />
  </>
);

export default App;
