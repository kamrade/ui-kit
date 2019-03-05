import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Sidebar} from 'modules/shared';

import SandboxPage from 'modules/sandbox/SandboxPage';
import AtomsPage from 'modules/atoms/AtomsPage';

import navElements from './const/nav';
import './Orders.scss';

class Orders extends Component {

  render() {
    return (
      <div className="page-orders">
        <Sidebar navElements={navElements} />

        <div className="workspace">

          <Switch>
            <Route path="/orders/sandbox" component={SandboxPage}/>
            <Route path="/orders/atoms" component={AtomsPage} />
            <Route render={props => <Redirect to="/orders/sandbox" />} />
          </Switch>

        </div>
      </div>
    );
  }

}

export default Orders;
