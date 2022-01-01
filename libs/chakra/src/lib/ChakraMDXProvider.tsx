import { MDXProvider } from '@mdx-js/react';
import { chakra, Alert } from '@chakra-ui/react';

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
  ul: (props: unknown) => <chakra.ul {...props} mt={'1.5rem'} ml={'1.25rem'} />,
  ol: (props: unknown) => <chakra.ol {...props} mt={'1.5rem'} ml={'1.25rem'} />,
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
  // inlineCode: Code,
};

export const ChakraMDXProvider = (props: any) => {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
};
