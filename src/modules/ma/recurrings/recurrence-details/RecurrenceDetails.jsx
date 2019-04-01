import React, { Component } from 'react';
import './RecurrenceDetails.scss';
import RecurrenceElement from '../recurrence-element/RecurrenceElement';

class RecurrenceDetails extends Component {

  render() {
    return (
      <div className="recurrence-details">
        { this.props.data.map((el, i) =>
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
