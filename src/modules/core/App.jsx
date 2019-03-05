import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Sidebar, Header} from 'modules/shared';
import './App.scss';

import SandboxPage from 'modules/sandbox/SandboxPage';
import AtomsPage from 'modules/atoms/AtomsPage';

import navElements from './const/nav';

class App extends Component {
  render() {
    return (

        <div className="App">
          <Header />
          <div className="current-app">
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
