import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className='ui-header'>

        <NavLink className='header-link' to='/ma'>
          <span className='app-title'>Merchant account</span>
        </NavLink>

        <NavLink className='header-link' to='/orders/sandbox'>
          <span className='app-title'>Orders</span>
        </NavLink>

      </div>
    );
  }

}

export default Header;
