import * as React from 'react'
import { chakra } from '@chakra-ui/react'
import { Ref } from 'react'

export const Anchor = React.forwardRef(
  (props: unknown, ref: Ref<HTMLAnchorElement>) => (
    <chakra.a ref={ref} apply='mdx.a' {...props} />
  )
)
