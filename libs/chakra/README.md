# Chakra-ui related libs

## Setup
Add package
```shell
yarn add @mdx-lib/chakra
```

Add MDX provider
```tsx
import { ChakraMDXProvider } from '@mdx-lib/chakra'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraMDXProvider>
      <Component {...pageProps} />
    </ChakraMDXProvider>
  )
}
```
