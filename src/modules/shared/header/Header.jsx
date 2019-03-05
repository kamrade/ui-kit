import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className='ui-header'>
        <span className='app-title'>Merchant account</span>
        <span className='app-title active'>Orders</span>
      </div>
    );
  }

}

export default Header;
