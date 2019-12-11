import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '~/store';
import Routes from '~/routes';
import { GlobalStyles } from '~/theme';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />

        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
