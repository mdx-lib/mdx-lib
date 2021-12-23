import { MDXProvider } from '@mdx-js/react';
import { chakra } from '@chakra-ui/react';

// import Image from 'next/image'
// const ResponsiveImage = (props) => (
//   <Image alt={props.alt} layout="responsive" {...props} />
// )

const components = {
  // img: ResponsiveImage,
  h1: (props: unknown) => (
    <chakra.h1 apply="mdx.h1" {...props} fontSize="5xl" />
  ),
  // h2: Heading.H2,
  // p: Text,
  // code: Pre,
  // inlineCode: Code,
};

export const ChakraMDXProvider = (props: any) => {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
};
