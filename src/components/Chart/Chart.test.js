import React from 'react';
import { render } from '@testing-library/react';

import Chart from './index';
import data from './mockData';

describe('Components - Chart', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Chart {...data} />);

    const chart = getByText(data.title);

    expect(chart).toBeDefined();
  });
});
