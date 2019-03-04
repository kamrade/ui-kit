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

    this.moveFader   = this.moveFader.bind(this);
    this.resizeFader = this.resizeFader.bind(this);
  }

  moveFader(newPosition) {
    this.setState({faderPosition: newPosition});
  }

  resizeFader(newWidth, newPosition) {
    this.setState({
      faderWidth: newWidth,
      faderPosition: newPosition,
    });
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
          <p className="m-0">pos: {this.state.faderPosition},</p>
          <p className="m-0">width: {this.state.faderWidth},</p>
        </div>

        <PaginationSliderControl
          faderMinWidth={this.state.faderMinWidth}
          faderPosition={this.state.faderPosition}
          faderWidth={this.state.faderWidth}
          faderMaxWidth={this.state.faderMaxWidth}

          moveFader={this.moveFader}
          resizeFader={this.resizeFader}
        />

      </div>
    );
  }

}

export default PaginationSlider;
