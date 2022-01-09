# chakra

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test chakra` to execute the unit tests via [Jest](https://jestjs.io).

## Setup
パッケージの追加
```shell
yarn add @mdx-lib/chakra
```

プロバイダの追加
```tsx
import { ChakraMDXProvider } from '@mdx-lib/chakra';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraMDXProvider>
      <Component {...pageProps} />
    </ChakraMDXProvider>
  )
}

```

## License & Authors
License: MIT
Authors: See chakra-ui/chakra-ui-docs  
(This Mdx Provider is based on above repository)
