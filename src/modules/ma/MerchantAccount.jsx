import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {Header} from 'modules/shared';
import {Sidebar} from 'modules/shared';
import SandboxPage from './sandbox/SandboxPage';
import AtomsPage from './atoms/AtomsPage';

import navElements from './const/nav';
import './MerchantAccount.scss';

class MerchantAccount extends Component {

  render() {
    return (
      <div>
        <Header />

        <div className="page-ma">
          <Sidebar navElements={navElements} />

          <div className="workspace">
            <Switch>
              <Route path="/ma/sandbox" component={SandboxPage}/>
              <Route path="/ma/elements" component={AtomsPage} />
              <Route render={props => <Redirect to="/ma/sandbox" />} />
            </Switch>
          </div>

        </div>
      </div>
    );
  }

}

export default MerchantAccount;
