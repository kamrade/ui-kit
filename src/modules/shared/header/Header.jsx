import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {IconBase, Notifications} from 'modules/shared';
import HeaderMobileMenu from './header-mobile-menu/HeaderMobileMenu';

import {cardpayLogo} from './cardpay-logo';
import './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className='ui-header'>

        <Link to="/">
          <div className="logo-wrapper">{cardpayLogo}</div>
        </Link>

        <div className="tablet-menu-block">
          <HeaderMobileMenu />
        </div>

        <NavLink className='header-link' to='/ma'>
          <span className='app-title'>Merchant account</span>
        </NavLink>

        <NavLink className='header-link' to='/orders'>
          <span className='app-title'>Orders</span>
        </NavLink>

        <NavLink className='header-link' to='/analytics'>
          <span className='app-title'>Analitycs</span>
        </NavLink>

        <div className="user-area">

          <Notifications />

          <div className="user-menu">
            <IconBase iconName='user'/>{''}
            <span className="username-text">Sheldon Cooper</span>{''}
            <IconBase iconName='chevron_down_sm_21'/>{''}
          </div>
        </div>

      </div>
    );
  }

}

export default Header;
