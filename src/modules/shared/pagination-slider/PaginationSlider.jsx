import React, { Component } from 'react';
import './PaginationSlider.scss';

import {UIButton, IconBase} from 'modules/shared'
import PaginationSliderControl from './pagination-slider-control/PaginationSliderControl';

class PaginationSlider extends Component {

  render() {
    return (
      <div className="ui-pagination-slider">

        <div className="button-controls">
          <UIButton theme='light'>
            <span className="btn-icon"><IconBase iconName='chevron_left'/></span>
          </UIButton>{' '}
          <UIButton theme='light'>
            <span className="btn-icon"><IconBase iconName='chevron_right'/></span>
          </UIButton>{' '}
        </div>

        <PaginationSliderControl/>
      </div>
    );
  }

}

export default PaginationSlider;
