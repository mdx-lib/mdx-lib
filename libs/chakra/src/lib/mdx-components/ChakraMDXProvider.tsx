import * as Chakra from '@chakra-ui/react';
import { Anchor } from './anchor';
import { InlineCode } from './inline-code';
import { LinkedHeading } from './linked-heading';
import { Pre } from './pre';
import { Table, TData, THead } from './table';
import { VideoPlayer } from './video-player';
import * as React from 'react';
import CodeBlock from './codeblock/codeblock';
import { MDXProvider } from '@mdx-js/react';

const { Alert, AspectRatio, Box, chakra, Kbd } = Chakra;

export const MDXComponents = {
  ...Chakra,
  h1: (props: unknown) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props: unknown) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props: unknown) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props: unknown) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  h5: (props: unknown) => <LinkedHeading as="h5" apply="mdx.h5" {...props} />,
  hr: (props: unknown) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props: unknown) => (
    <Box as="strong" fontWeight="semibold" {...props} />
  ),
  code: InlineCode,
  pre: (props: unknown) => {
    if (typeof (props as any).children === 'string') return <Pre {...props} />;
    return <CodeBlock {...props} />;
  },
  kbd: Kbd,
  br: ({ reset, ...props }) => (
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
  p: (props: unknown) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props: unknown) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props: unknown) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props: unknown) => <chakra.li pb="4px" {...props} />,
  blockquote: (props: unknown) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
  VideoPlayer,
  AspectRatio,
};

export const ChakraMDXProvider = (props: any) => {
  return (
    <MDXProvider components={MDXComponents as any}>
      <main {...props} />
    </MDXProvider>
  );
};
