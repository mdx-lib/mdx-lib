import React from 'react';
import { Box, HTMLChakraProps } from '@chakra-ui/react';
import theme from 'prism-react-renderer/themes/nightOwl'
import {
  Language,
} from 'prism-react-renderer'
import CodeContainer from './code-container'
import CopyButton from './copy-button'
import Highlight from './highlight'

export type CodeBlockProps = HTMLChakraProps<'pre'> & {
  children: {
    props: {
      className: string
      children: string
      ln?: string
      viewlines?: boolean
    }
  }

}

function CodeBlock(props: CodeBlockProps) {
  const { className, children, viewlines, ln } = props.children.props

  // TODO: check language type
  const language = className?.replace(/language-/, '')
  if (!language) throw Error("please specify language")

  const rawCode = children.trim()

  return (
    <Box position='relative' zIndex='0'>
      <CodeContainer>
        <Highlight
          codeString={rawCode}
          language={language as Language}
          theme={theme}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top='4' code={rawCode} />
    </Box>
  )
}

export default CodeBlock
