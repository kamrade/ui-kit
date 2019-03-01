import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Sidebar} from 'modules/shared';
import './App.scss';

import SandboxPage from 'modules/sandbox/SandboxPage';
import AtomsPage from 'modules/atoms/AtomsPage';

import navElements from './const/nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <Sidebar navElements={navElements} />

          <div className="workspace">

            <Switch>
              <Route path="/sandbox" component={SandboxPage}/>
              <Route path="/atoms" component={AtomsPage} />
              <Route render={props => <Redirect to="/sandbox" />} />
            </Switch>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
