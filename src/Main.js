import React from 'react';
import Feed from './Feed';
import NoMatch from './NoMatch';
import { Route, Switch } from 'react-router-dom';
import Navbar from './NavBar'
import AppContainer from './container/AppContainer'

export default () => (
    <div>
          <Switch >
            <Route path="/" exact component={AppContainer} />
            <Route path="/feed" exact component={Feed}/>
            <Route exact component={NoMatch}/>
          </Switch>
        <Navbar/>
    </div>
);
