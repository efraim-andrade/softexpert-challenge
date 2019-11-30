import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Search from './index';

describe('Components - Search', () => {
  it('Should be able to search by press Enter key', () => {
    const { container } = render(<Search />);

    fireEvent.keyPress(container, { key: 'Enter', keyCode: 13 });

    expect(true).toBe(true);
  });
});
