import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Sidebar} from 'modules/shared';

import AllTransactions from './AllTransactions';
import Payments from './Payments';

import navElements from './const/nav';
import './Orders.scss';

class Orders extends Component {

  render() {
    return (
      <div className="page-orders">
        <div className="sidebar-block">
          <Sidebar navElements={navElements} />
        </div>

        <div className="workspace">

          <Switch>
            <Route path="/orders/all-transactions" component={AllTransactions}/>
            <Route path="/orders/payments" component={Payments} />
            <Route render={props => <Redirect to="/orders/all-transactions" />} />
          </Switch>

        </div>
      </div>
    );
  }

}

export default Orders;
