import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to demo!</title>
      </Head>
      <ChakraProvider>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
