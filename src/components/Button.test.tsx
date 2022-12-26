import { render } from '@testing-library/react';

import Button from './Button';

describe('Button Test', () => {
  it('Should be visible Button Text', () => {
    const { container } = render(<Button />);

    expect(container).toHaveTextContent('Button');
  });
});
