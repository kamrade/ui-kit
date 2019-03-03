import React, { Component } from 'react';
import './PaginationSlider.scss';

import {UIButton, IconBase} from 'modules/shared'
import PaginationSliderControl from './pagination-slider-control/PaginationSliderControl';

class PaginationSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      faderPosition: 0,
      faderWidth: 200,
      faderMinWidth: 100,
      faderMaxWidth: 300
    }
    this.moveFader = this.moveFader.bind(this);
  }

  moveFader(newPosition) {
    this.setState({faderPosition: newPosition});
  }

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

        <div className="indicators">
          {this.state.faderPosition}
        </div>

        <PaginationSliderControl
          faderMinWidth={this.state.faderMinWidth}
          faderPosition={this.state.faderPosition}
          faderWidth={this.state.faderWidth}
          faderMaxWidth={this.state.faderMaxWidth}
          moveFader={this.moveFader}
        />

      </div>
    );
  }

}

export default PaginationSlider;
