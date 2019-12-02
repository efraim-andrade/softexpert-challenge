import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import Header from './index';

describe('Components - Header', () => {
  const history = createMemoryHistory();

  const props = {
    subtitle: 'SoftExpert',
    title: 'Stock Exchange Challenge',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<Header {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the goback button when it's not in the home", () => {
    window.history.pushState({}, '', '/details');

    const { getByTestId } = render(
      <Router history={history}>
        <Header {...props} />
      </Router>
    );

    const goBackBtn = getByTestId('goBack');

    expect(goBackBtn).toBeDefined();
  });
});
