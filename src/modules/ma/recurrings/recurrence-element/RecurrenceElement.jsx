import React, { Component } from 'react';
import './RecurrenceElement.scss';

class RecurrenceElement extends Component {

  render() {
    return (
      <div className="recurrence-element">
        <div className="title">{this.props.el.title}</div>
        <div className="value">{this.props.el.value}</div>
      </div>
    );
  }

}

export default RecurrenceElement;
