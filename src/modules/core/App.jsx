import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Header} from 'modules/shared';
import AppNavigation from './AppNavigation';
import './App.scss';

import MerchantAccountPage from 'modules/ma/MerchantAccount';
import OrdersPage from 'modules/orders/Orders';
import AnalyticsPage from 'modules/analytics/Analytics';

class App extends Component {
  render() {
    return (

        <div className="App">

          <div className="current-application">
            <Switch>
              <Route exact path='/' component={AppNavigation} />
              <Route path='/ma' component={MerchantAccountPage} />
              <Route path='/orders' component={OrdersPage} />
              <Route path='/analytics' component={AnalyticsPage} />
            </Switch>
          </div>

        </div>

    );
  }
}

export default App;
