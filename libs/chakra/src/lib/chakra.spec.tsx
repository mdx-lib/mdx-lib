import { render } from '@testing-library/react';

import Chakra from './chakra';

describe('Chakra', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chakra />);
    expect(baseElement).toBeTruthy();
  });
});
