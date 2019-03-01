import React, { Component } from 'react';
import Navigation from 'modules/shared/navigation/Navigation';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
