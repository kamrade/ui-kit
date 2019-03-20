import React, { Component } from 'react';
import './RecurringsPage.scss';

import RecurrenceDetails from './recurrence-details/RecurrenceDetails';

class RecurringsPage extends Component {

  render() {
    return (
      <div className="recurrings-page">
        <div className="page-heading">
          <h1>RECURRINGS PAGE</h1>
        </div>
        <RecurrenceDetails />
      </div>
    );
  }

}

export default RecurringsPage;
