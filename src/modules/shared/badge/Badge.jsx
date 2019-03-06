import React, { Component } from 'react';

class Badge extends Component {

  render() {
    return (
      <span className={`
        ui-badge
        badge
        badge-${this.props.theme}
      `}>
        {this.props.children}
      </span>
    );
  }

}

export default Badge;
