import React from 'react';
import PropTypes from 'prop-types';
import './IconBase.scss';

import * as icons from './icons';

const IconBase = ({iconName, color}) => (
  <span className={`ui-icon-base ${color}`}>
    {icons[iconName || 'all_transactions']}
  </span>
);

IconBase.propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string,
}

export default IconBase;
