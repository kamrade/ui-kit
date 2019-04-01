import React, { Component } from 'react';
import './RecurringsPage.scss';
import {account, plan, subscriptionInstallment, subscriptionScheduled} from './const/data';

import RecurrenceDetails from './recurrence-details/RecurrenceDetails';

class RecurringsPage extends Component {

  render() {
    return (
      <div className="recurrings-page">

        <div className="page-heading"><h1>Recurrings Page</h1></div>

        <hr/>

        <div className="page-heading"><h3>Account</h3></div>
        <RecurrenceDetails data={account} />

        <div className="page-heading"><h3>Plan</h3></div>
        <RecurrenceDetails data={plan} />

        <div className="page-heading"><h3>Subscription Scheduled</h3></div>
        <RecurrenceDetails data={subscriptionScheduled} />

        <div className="page-heading"><h3>Subscription Installment</h3></div>
        <RecurrenceDetails data={subscriptionInstallment} />
      </div>
    );
  }

}

export default RecurringsPage;
