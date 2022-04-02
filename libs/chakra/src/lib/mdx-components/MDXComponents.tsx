import * as React from 'react'
import { Alert, AspectRatio, Box, chakra, Kbd } from '@chakra-ui/react'
import { Anchor } from './anchor'
import { InlineCode } from './inline-code'
import { LinkedHeading } from './linked-heading'
import { Pre } from './pre'
import { Table, TData, THead } from './table'
import { VideoPlayer } from './video-player'
import CodeBlock from './codeblock/codeblock'

// NOTE: The following code was created with reference to https://github.com/chakra-ui/chakra-ui-docs
// Thanks to the people who made the code :)
export const MDXComponents = {
  h1: (props: unknown) => <chakra.h1 apply='mdx.h1' {...props} />,
  h2: (props: unknown) => <LinkedHeading apply='mdx.h2' {...props} />,
  h3: (props: unknown) => <LinkedHeading as='h3' apply='mdx.h3' {...props} />,
  h4: (props: unknown) => <LinkedHeading as='h4' apply='mdx.h4' {...props} />,
  hr: (props: unknown) => <chakra.hr apply='mdx.hr' {...props} />,
  strong: (props: unknown) => (
    <Box as='strong' fontWeight='semibold' {...props} />
  ),
  code: InlineCode,
  // eslint-disable-next-line
  pre: (props: any) => {
    if (typeof props.children === 'string') return <Pre {...props} />
    return <CodeBlock {...props} />
  },
  kbd: Kbd,
  br: ({ reset, ...props }: { reset: boolean; props: unknown }) => (
    <Box
      as={reset ? 'br' : undefined}
      height={reset ? undefined : '24px'}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props: unknown) => <chakra.p apply='mdx.p' {...props} />,
  ul: (props: unknown) => <chakra.ul apply='mdx.ul' {...props} />,
  ol: (props: unknown) => <chakra.ol apply='mdx.ul' {...props} />,
  li: (props: unknown) => <chakra.li pb='4px' {...props} />,
  blockquote: (props: unknown) => (
    <Alert
      mt='4'
      role='none'
      status='warning'
      variant='left-accent'
      as='blockquote'
      rounded='4px'
      my='1.5rem'
      {...props}
    />
  ),
  VideoPlayer,
  AspectRatio,
}
