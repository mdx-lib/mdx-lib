import { chakra, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const InlineCode = (props: unknown) => (
  <chakra.code
    apply='mdx.code'
    color={useColorModeValue('purple.500', 'purple.200')}
    {...props}
  />
)
