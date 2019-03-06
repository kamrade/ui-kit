import React, { Component } from 'react';

import {IconBase, Badge} from 'modules/shared';

import './Notifications.scss';

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iconOn: true
    }

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState((state) => {
      return {iconOn: !state.iconOn}
    })
  }

  render() {
    return (
      <div onClick={this.toggleNotifications} className="ui-notifications">
        <IconBase iconName={`${this.state.iconOn ? 'bell' : 'bell_disabled'}`}/>
        <span style={{
          opacity: this.state.iconOn ? 1 : 0
        }} className="notifications-badge">
          <Badge theme="warning">99+</Badge>
        </span>
      </div>
    );
  }

}

export default Notifications;
