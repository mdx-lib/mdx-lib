import { MDXProvider } from '@mdx-js/react';
import { chakra } from '@chakra-ui/react';

// import Image from 'next/image'
// const ResponsiveImage = (props) => (
//   <Image alt={props.alt} layout="responsive" {...props} />
// )

const components = {
  // img: ResponsiveImage,
  h1: (props: unknown) => <chakra.h1 {...props} fontSize="5xl" />,
  h2: (props: unknown) => <chakra.h2 {...props} fontSize="4xl" />,
  h3: (props: unknown) => <chakra.h3 {...props} fontSize="3xl" />,
  h4: (props: unknown) => <chakra.h4 {...props} fontSize="2xl" />,
  h5: (props: unknown) => <chakra.h5 {...props} fontSize="xl" />,
  p: (props: unknown) => <chakra.p {...props} fontSize="md" />,
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
