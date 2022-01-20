# Chakra-ui related libs

## Setup
### Add package
```shell
yarn add @mdx-lib/chakra
```

### Confirm & Add peerDependencies
on your machine, check package.json
```json
{
  "name": "@mdx-lib/chakra",
  "peerDependencies": {
    "react": "17.0.2",
    "@mdx-js/react": "^1.6.22",
    "@chakra-ui/react": "1.7.4"
  }
}
```

```shell
# or exec below command
npm info @mdx-lib/chakra@YOUR_VERSION peerDependencies
```

### Add MDX provider
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

### NOTE
ChakraMDXProvider was created with reference to [chakra-ui-docs](https://github.com/chakra-ui/chakra-ui-docs).  
I am deeply grateful to the people who made the code.
