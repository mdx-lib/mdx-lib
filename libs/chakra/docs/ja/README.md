[![Nx](https://img.shields.io/badge/Monorepo-Nx-%23143157)](https://nx.dev)
[![TypeScript](https://img.shields.io/badge/Code-TypeScript-%233178c6)](https://www.typescriptlang.org)
[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)](LICENSE)

<p align="center"><img src="../../../../docs/images/logo.png" alt="mdx-lib"></p>
<h1 align="center">MDX-LIB</h1>

# What's this?
MDXをもっと便利にするためのライブラリです。

# MDX with Chakra-ui

## Setup
### パッケージの追加
```shell
yarn add @mdx-lib/chakra
```

### peerDependenciesの確認
以下の依存関係がすでにインストールされていることを確認してください。  
まだ追加されていない場合はpeerDependenciesを手動で追加してください。

```shell
# peerDependencies の確認
npm info @mdx-lib/chakra@YOUR_VERSION peerDependencies
```

### Update theme
マークダウンをスタイリングするために以下を参考にtheme.tsを更新して下さい。  
https://github.com/mdx-lib/mdx-lib/blob/main/apps/demo/theme.ts

### MDX providerの利用方法
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
## セットアップ
```shell
# モノレポ内の全ての依存パッケージのインストール
yarn bootstrap
```

# Sample Image
<p align="center"><img src="../images/sample.png" alt="mdx-lib"></p>

### NOTE
ChakraMDXProvider は [chakra-ui-docs](https://github.com/chakra-ui/chakra-ui-docs) [(MITライセンス)](https://github.com/chakra-ui/chakra-ui-docs/blob/83fa9b0083835bcad17930c31c9d126ed03017d0/README.md?plain=1#L279) を参考にしています。  

