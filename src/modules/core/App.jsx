import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Header} from 'modules/shared';
import './App.scss';

import MerchantAccountPage from 'modules/ma/MerchantAccount';
import OrdersPage from 'modules/orders/Orders';

class App extends Component {
  render() {
    return (

        <div className="App">
          <Header />

          <div className="current-application">
            <Route exact path="/" render={props => <Redirect to="/ma" />} />
            <Switch>
              <Route path='/ma' component={MerchantAccountPage} />
              <Route path='/orders' component={OrdersPage} />
              <Route render={props => <Redirect to="/ma" />} />
            </Switch>
          </div>
        </div>

    );
  }
}

export default App;
