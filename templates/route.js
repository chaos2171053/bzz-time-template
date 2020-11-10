import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { asyncRouter, nomatch } from '@buildrun/boot';

const List = asyncRouter(() => import('./list'));
export default function Index({ match }) {
  return (
    <Switch>
      <Route exact path={match.url} component={List} />
      <Route path="*" component={nomatch} />
    </Switch>
  );
}