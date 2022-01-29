import * as React from 'react'
import { render } from '@testing-library/react'

import { Anchor } from './anchor'

describe('Anchor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Anchor />)
    expect(baseElement).toBeTruthy()
  })
})
