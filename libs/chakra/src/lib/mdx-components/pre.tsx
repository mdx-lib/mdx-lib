import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import * as React from 'react'

export const Pre = (props: HTMLChakraProps<'pre'>) => (
  <chakra.pre my='2em' borderRadius='sm' {...props} />
)
