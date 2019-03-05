import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {Sidebar} from 'modules/shared';
import SandboxPage from './sandbox/SandboxPage';
import AtomsPage from './atoms/AtomsPage';

import navElements from './const/nav';
import './MerchantAccount.scss';

class MerchantAccount extends Component {

  render() {
    return (
      <div className="page-ma">
        <Sidebar navElements={navElements} />

        <div className="workspace">

          <Switch>
            <Route path="/ma/sandbox" component={SandboxPage}/>
            <Route path="/ma/atoms" component={AtomsPage} />
            <Route render={props => <Redirect to="/ma/sandbox" />} />
          </Switch>

        </div>
      </div>
    );
  }

}

export default MerchantAccount;
