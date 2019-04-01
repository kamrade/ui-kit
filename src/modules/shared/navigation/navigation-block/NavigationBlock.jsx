import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './NavigationBlock.scss';
import { IconBase } from 'modules/shared';

const NavigationBlock = (props) => (

  <div className="ui-navigation-block">
    <NavLink className="d-block" to={props.path}>
      <div className="link-content">
        <div className="ui-navigation-block-icon"> <IconBase iconName={props.iconName} /> </div>
        <div className="ui-navigation-block-text">{props.text}</div>
      </div>
    </NavLink>
  </div>

);

NavigationBlock.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
}

export default NavigationBlock;
