import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '~/routes';
import { GlobalStyles } from '~/theme';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes />
    </BrowserRouter>
  );
}

export default App;
