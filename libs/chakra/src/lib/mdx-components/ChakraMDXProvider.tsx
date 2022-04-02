import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './MDXComponents'

export const ChakraMDXProvider = (props: React.PropsWithChildren<unknown>) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <MDXProvider components={MDXComponents}>
      <div {...props} />
    </MDXProvider>
  )
}
