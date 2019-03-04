import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import './PaginationSliderControl.scss';
import PaginationFader from '../pagination-fader/PaginationFader';

class PaginationSliderControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderControlWidth: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      let width = this.sliderControl.offsetWidth;
      this.setState({
        sliderControlWidth: width
      })
    }, 1000);
  }

  render() {
    return (
      <div ref={el => this.sliderControl = el} className="ui-pagination-slider-control">

        <PaginationFader
          maxWidth={this.state.sliderControlWidth}
          faderPosition={this.props.faderPosition}
          faderWidth={this.props.faderWidth}
          faderMinWidth={this.props.faderMinWidth}
          faderMaxWidth={this.props.faderMaxWidth}

          moveFader={this.props.moveFader}
          resizeFader={this.props.resizeFader}
        />

      </div>
    );
  }

}

PaginationSliderControl.propTypes = {
  faderPosition: PropTypes.number,
  faderWidth: PropTypes.number,
  faderMinWidth: PropTypes.number,
  faderMaxWidth: PropTypes.number,

  moveFader: PropTypes.func,
  resizeFader: PropTypes.func,
}

export default PaginationSliderControl;
