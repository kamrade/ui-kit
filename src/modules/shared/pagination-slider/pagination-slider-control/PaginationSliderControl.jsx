import React from 'react';
import './PaginationSliderControl.scss';

import {IconBase} from 'modules/shared';

const PaginationSliderControl = () => (
  <div className="ui-pagination-slider-control">
    <div className="resizer resizer-left">
      <IconBase iconName='draggable'/>
    </div>
    <div className="resizer resizer-right">
      <IconBase iconName='draggable'/>
    </div>
  </div>
);

export default PaginationSliderControl;
