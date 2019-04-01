import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import TopGames from '../screens/TopGames';
import LeftMenu from '../components/LeftMenu';
import NavBar from '../components/NavBar';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <LeftMenu />
        <Switch>
          <Route path='/directory' component={TopGames} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
