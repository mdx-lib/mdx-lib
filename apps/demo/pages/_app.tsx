import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { ChakraMDXProvider } from '../../../libs/chakra/src/lib/mdx-components';
import theme from '../theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to demo!</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ChakraMDXProvider>
          <Component {...pageProps} />
        </ChakraMDXProvider>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
