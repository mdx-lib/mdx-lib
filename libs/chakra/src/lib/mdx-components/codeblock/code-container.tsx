import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

function CodeContainer(props: BoxProps) {
  return <Box rounded='8px' my='8' overflow="hidden" bg='#011627' {...props} />
}

export default CodeContainer
