import React, { Component } from 'react';
import './RecurrenceDetails.scss';
import RecurrenceElement from '../recurrence-element/RecurrenceElement';

class RecurrenceDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'account',
          title: 'Account',
          value: '6260998'
        },
        {
          name: 'website',
          title: 'Website',
          value: 'http://lorem-ipsum.com'
        },
        {
          name: 'plan_name',
          title: 'Plan Name',
          value: 'Wery nice plan name'
        },
        // {
        //   name: 'subscribed at',
        //   title: 'Subscribed at',
        //   value: 'MAY 28, 2018'
        // },
        // {
        //   name: 'amount',
        //   title: 'Amount',
        //   value: '100.00 USD'
        // },
        // {
        //   name: 'recurrence',
        //   title: 'Recurrence',
        //   value: '1 month'
        // },
        // {
        //   name: 'status',
        //   title: 'Status',
        //   value: 'Active'
        // },
      ]
    };
  }

  render() {
    return (
      <div className="recurrence-details">
        { this.state.data.map((el, i) =>
          (
            <div className="recurrence-element-wrapper" key={i}>
              <RecurrenceElement el={el} />
            </div>
          )
        )}
      </div>
    );
  }

}

export default RecurrenceDetails;
