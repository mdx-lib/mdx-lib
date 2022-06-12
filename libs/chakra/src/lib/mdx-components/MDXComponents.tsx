import * as React from 'react'
import { Alert, AspectRatio, Box, chakra, HTMLChakraProps, Kbd } from '@chakra-ui/react';
import { Anchor } from './anchor'
import { InlineCode } from './inline-code'
import { LinkedHeading } from './linked-heading'
import { Pre } from './pre'
import { Table, TData, THead } from './table'
import { VideoPlayer } from './video-player'
import CodeBlock, { CodeBlockProps } from './codeblock/codeblock';

// NOTE: The following code was created with reference to https://github.com/chakra-ui/chakra-ui-docs
// Thanks to the people who made the code :)
export const MDXComponents = {
  h1: (props: HTMLChakraProps<'h1'>) => <chakra.h1 apply='mdx.h1' {...props} />,
  h2: (props: HTMLChakraProps<'h2'>) => <LinkedHeading apply='mdx.h2' {...props} />,
  h3: (props: HTMLChakraProps<'h3'>) => <LinkedHeading as='h3' apply='mdx.h3' {...props} />,
  h4: (props: HTMLChakraProps<'h4'>) => <LinkedHeading as='h4' apply='mdx.h4' {...props} />,
  hr: (props: HTMLChakraProps<'hr'>) => <chakra.hr apply='mdx.hr' {...props} />,
  strong: (props: HTMLChakraProps<'strong'>) => (
    <Box as='strong' fontWeight='semibold' {...props} />
  ),
  code: InlineCode,
  pre: (props: CodeBlockProps) => {
    if (typeof props.children === 'string') return <Pre {...props} />
    return <CodeBlock {...props} />
  },
  kbd: Kbd,
  br: () => <br/>,
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props: HTMLChakraProps<'p'>) => <chakra.p apply='mdx.p' {...props} />,
  ul: (props: HTMLChakraProps<'ul'>) => <chakra.ul apply='mdx.ul' {...props} />,
  ol: (props: HTMLChakraProps<'ol'>) => <chakra.ol apply='mdx.ul' {...props} />,
  li: (props: HTMLChakraProps<'li'>) => <chakra.li pb='4px' {...props} />,
  blockquote: (props: HTMLChakraProps<'div'>) => (
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
