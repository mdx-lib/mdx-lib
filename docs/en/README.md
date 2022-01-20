[![Nx](https://img.shields.io/badge/Monorepo-Nx-%23143157)](https://nx.dev)
[![TypeScript](https://img.shields.io/badge/Code-TypeScript-%233178c6)](https://www.typescriptlang.org)
[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)](LICENSE)

<p align="center"><img src="../images/logo.png" alt="mdx-lib"></p>
<h1 align="center">MDX-LIB</h1>

# What's this?
A library to make MDX more convenient.

# MDX with Chakra-ui

## Setup
### Add package
```shell
yarn add @mdx-lib/chakra
```

### Confirm & Add peerDependencies
Please confirm below dependencies are already installed.  
If it has not been added yet, please install the specified version of peerDependencies manually.

```shell
# confirm peerDependencies
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

# For Contributor
## Setup
```shell
# Install all dependencies in monorepo
yarn bootstrap
```
