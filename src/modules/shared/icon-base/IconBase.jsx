import React from 'react';
import PropTypes from 'prop-types';
import './IconBase.scss';

import * as icons from './icons';

const IconBase = (props) => (
  <span className="ui-icon-base">
    {icons[props.iconName || 'all_transactions']}
  </span>
);

IconBase.propTypes = {
  iconName: PropTypes.string,
}

export default IconBase;
