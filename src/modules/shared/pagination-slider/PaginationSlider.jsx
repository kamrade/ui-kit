import React, { Component } from 'react';
import './PaginationSlider.scss';

import {UIButton, IconBase} from 'modules/shared'
import PaginationSliderControl from './pagination-slider-control/PaginationSliderControl';

class PaginationSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blockWidth: 0,
      faderPosition: 0,
      faderWidth: 200,
      faderMinWidth: 50,
      faderMaxWidth: 300
    }

    this.moveFader   = this.moveFader.bind(this);
    this.resizeFader = this.resizeFader.bind(this);
    this.setBlockWidth = this.setBlockWidth.bind(this);
  }

  setBlockWidth(w) {
    this.setState({
      blockWidth: w
    })
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
      <div>
        <div className="ui-pagination-slider">

          <div className="button-controls">
            <UIButton theme='light' size='sm'>
              <span className="btn-icon"><IconBase iconName='chevron_left_sm'/></span>
            </UIButton>
            <UIButton theme='light' size='sm'>
              <span className="btn-icon"><IconBase iconName='chevron_right_sm'/></span>
            </UIButton>
          </div>

          <PaginationSliderControl
            faderMinWidth={this.state.faderMinWidth}
            faderPosition={this.state.faderPosition}
            faderWidth={this.state.faderWidth}
            faderMaxWidth={this.state.faderMaxWidth}

            moveFader={this.moveFader}
            resizeFader={this.resizeFader}
            setBlockWidth={this.setBlockWidth}
          />

        </div>

        <div className="indicators">
          <p className="m-0">block width: {this.state.blockWidth}</p>
          <p className="m-0">pos: {this.state.faderPosition},</p>
          <p className="m-0">width: {this.state.faderWidth},</p>
          <p className="m-0">fader max width: {this.state.faderMaxWidth},</p>
          <p className="m-0">fader min width: {this.state.faderMinWidth}</p>
        </div>

      </div>
    );
  }

}

export default PaginationSlider;
