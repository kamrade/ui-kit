import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './NavigationBlock.scss';
import { IconBase } from 'modules/shared';

const NavigationBlock = (props) => (

  <div className="ui-navigation-block">
    <NavLink to={props.path}>
      <div className="link-content">
        <div className="ui-navigation-block-icon">
          <IconBase
            iconName={props.iconName}
          />
        </div>
        <p className="ui-navigation-block-text">{props.text}</p>
      </div>
    </NavLink>
  </div>

);

NavigationBlock.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationBlock;
