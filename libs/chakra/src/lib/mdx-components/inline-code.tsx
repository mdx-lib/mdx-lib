import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

export const InlineCode = (props: HTMLChakraProps<'code'>) => (
  <chakra.code
    apply='mdx.code'
    color={useColorModeValue('purple.500', 'purple.200')}
    {...props}
  />
)
