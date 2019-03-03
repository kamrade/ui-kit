import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import './PaginationFader.scss';

import {IconBase} from 'modules/shared';

class PaginationFader extends Component {

  constructor(props) {
    super(props);

    this.state = {

      startPosLeft:  0,
      distanceLeft:  0,

      startPosRight: 0,
      distanceRight: 0,

      isResizing: false,
      isResizeOverflow: false,

      // fader position
      faderPosition: props.faderPosition,
      faderPositionBeforeMove: 0,
      startMoveFaderPosition: 0,
      isMoving: false,

      // fader width
      faderWidth: props.faderWidth,
      startResizeFaderWidth: props.faderWidth
    }

    this.faderResizeLeftStart     = this.faderResizeLeftStart.bind(this);
    this.faderResizingLeft        = this.faderResizingLeft.bind(this);
    this.faderResizeLeftRelease   = this.faderResizeLeftRelease.bind(this);

    this.faderResizeRightStart    = this.faderResizeRightStart.bind(this);
    this.faderResizingRight       = this.faderResizingRight.bind(this);
    this.faderResizeRightRelease  = this.faderResizeRightRelease.bind(this);

    this.faderMoveStart           = this.faderMoveStart.bind(this);
    this.faderMoving              = this.faderMoving.bind(this);
    this.faderMoveRelease         = this.faderMoveRelease.bind(this);

  }

  // SCALING FADER RIGHT >>>
  faderResizeRightStart(event) {
    this.setState({
      startPosRight: event.clientX,
      startResizeFaderWidth: this.state.faderWidth,
      faderPositionBeforeMove: this.state.faderPosition,
      isResizing: true,
      isResizeOverflow: false
    });

    event.preventDefault();
    event.stopPropagation();

    document.addEventListener('mousemove', this.faderResizingRight);
    document.addEventListener('mouseup', this.faderResizeRightRelease);

  }

  faderResizingRight(event) {

  }

  faderResizeRightRelease(event) {
    let currentPos = event.clientX;
    this.setState({
      isResizing: false,
      isResizeOverflow: false
    });
    document.removeEventListener('mousemove', this.faderResizingRight);
    document.removeEventListener('mouseup', this.faderResizeRightRelease);

  }

  // SCALING FADER LEFT >>>

  faderResizeLeftStart(event) {

    this.setState({
      startPosLeft: event.clientX,
      startResizeFaderWidth: this.state.faderWidth,
      faderPositionBeforeMove: this.state.faderPosition,
      isResizing: true
    });

    event.preventDefault();
    event.stopPropagation();
    document.addEventListener('mousemove', this.faderResizingLeft);
    document.addEventListener('mouseup', this.faderResizeLeftRelease);
  }

  faderResizingLeft(event) {
    const currentPos = event.clientX;
    const offsetLeft = currentPos - this.state.startPosLeft;

    let newFaderPosition = this.state.faderPositionBeforeMove + offsetLeft;
    let newFaderWidth = 0;
    let resizeOverflow = false;

    if (newFaderPosition > 0) {
      newFaderWidth = this.state.startResizeFaderWidth - offsetLeft;
      if (newFaderWidth > this.props.faderMaxWidth) {
        newFaderWidth = this.props.faderMaxWidth;
        newFaderPosition = this.state.faderPosition;
        resizeOverflow = true;
      } else if (newFaderWidth < this.props.faderMinWidth) {
        newFaderWidth = this.props.faderMinWidth;
        newFaderPosition = this.state.faderPosition;
        resizeOverflow = true;
      }
    } else {
      if ((newFaderWidth < this.props.faderMaxWidth) && (newFaderWidth > this.props.faderMinWidth)) {
        newFaderPosition = 0;
      } else {
        newFaderPosition = this.state.faderPosition;
        resizeOverflow = true;
      }
      newFaderWidth = this.state.faderWidth;
    }

    this.setState({
      distanceLeft: offsetLeft,
      faderWidth: newFaderWidth,
      faderPosition: newFaderPosition,
      isResizeOverflow: resizeOverflow
    });

  }

  faderResizeLeftRelease(event) {
    let currentPos = event.clientX;
    this.setState({
      distanceLeft: currentPos - this.state.startPosLeft,
      isResizing: false,
      isResizeOverflow: false
    });

    document.removeEventListener('mousemove', this.faderResizingLeft);
    document.removeEventListener('mouseup', this.faderResizeLeftRelease);
  }

  // SCALING FADER <<<

  // MOVING FADER >>>

  faderMoveStart(event) {
    const startPos = event.clientX;

    this.setState({
      startMoveFaderPosition: startPos,
      faderPositionBeforeMove: this.state.faderPosition,
      isMoving: true
    });

    event.preventDefault();
    event.stopPropagation();
    document.addEventListener('mousemove', this.faderMoving);
    document.addEventListener('mouseup', this.faderMoveRelease);
  }

  faderMoving(event) {
    const currentPos = event.clientX;
    const offset = currentPos - this.state.startMoveFaderPosition;
    let faderPos = this.state.faderPositionBeforeMove + offset;

    if (faderPos < 0) {
      faderPos = 0;
    } else if  ((faderPos + this.state.faderWidth) > this.props.maxWidth) {
      faderPos = this.props.maxWidth - this.state.faderWidth;
    }

    this.setState({
      faderPosition: faderPos
    });
  }

  faderMoveRelease() {
    this.setState({
      startMoveFaderPosition: 0,
      faderPositionBeforeMove: this.state.faderPosition,
      isMoving: false
    });
    this.props.moveFader(this.state.faderPosition)
    document.removeEventListener('mousemove', this.faderMoving);
    document.removeEventListener('mouseup', this.faderMoveRelease);
  }

  // MOVING FADER <<<

  render() {
    return (
      <div
        style={{
          left: this.state.faderPosition,
          width: this.state.faderWidth,
          opacity: this.state.isMoving || this.state.isResizing ? '.4' : '1'
        }}
        onMouseDown={this.faderMoveStart}
        className={`ui-pagination-fader ${this.state.isResizeOverflow ? 'over-fade' : ''}`}>

        <div onMouseDown={this.faderResizeLeftStart} className="resizer resizer-left">
          <IconBase iconName='draggable'/>
        </div>

        <div onMouseDown={this.faderResizeRightStart} className="resizer resizer-right">
          <IconBase iconName='draggable'/>
        </div>

        <div className="counter">

        </div>
      </div>
    );
  }

}

PaginationFader.propTypes = {
  faderPosition: PropTypes.number,
  faderMinWidth: PropTypes.number,
  faderMaxWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  moveFader: PropTypes.func
}

export default PaginationFader;
