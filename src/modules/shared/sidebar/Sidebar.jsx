import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';
import {Navigation} from 'modules/shared';

const Sidebar = (props) => (
  <div className="ui-sidebar">
    <Navigation navElements={props.navElements} />
  </div>
);

Sidebar.propTypes = {
  navElements: PropTypes.array
}

export default Sidebar;
