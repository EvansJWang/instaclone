import React from 'react';
import NoMatch from './NoMatch';
import { Route, Switch } from 'react-router-dom';
import AppContainer from './container/AppContainer'
import HeaderContainer from './container/HeaderContainer'
import LoginContainer from './container/LoginContainer'
import AccountContainer from './container/AccountContainer'

export default () => (
    <div>
        <HeaderContainer/>
          <Switch >
            <Route path="/" exact component={AppContainer} />
            <Route path="/feed" exact component={AppContainer}/>
            <Route path="/login" exact component={LoginContainer}/>
            <Route path="/account" exact component={AccountContainer}/>
            <Route exact component={NoMatch}/>
          </Switch>

    </div>
);
