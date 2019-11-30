import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main, Details } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />

      <Route path="/detail:symbol" exact component={Details} />
    </Switch>
  );
}
