import { render } from '@testing-library/react'

import MdxSamples from './mdx-samples'

describe('MdxSamples', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MdxSamples />)
    expect(baseElement).toBeTruthy()
  })
})
