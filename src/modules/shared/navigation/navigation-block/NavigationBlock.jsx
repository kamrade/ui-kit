import React from 'react';
import './NavigationBlock.scss';
import { IconBase } from 'modules/shared';

const NavigationBlock = () => (
  <div className="ui-navigation-block">
    <IconBase iconName="summary" />
    <span className="ui-navigation-block-text">Navigation Block</span>
  </div>
);

export default NavigationBlock;
