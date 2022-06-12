import * as React from 'react'
import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import { Ref } from 'react'

export const Anchor = React.forwardRef(
  (props: HTMLChakraProps<'a'>, ref: Ref<HTMLAnchorElement>) => (
    <chakra.a ref={ref} apply='mdx.a' {...props} />
  )
)
