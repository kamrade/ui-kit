import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UIButton.scss';

class UIButton extends Component {

  render() {
    const {theme, size, addClass} = this.props;
    return (
      <div className="ui-button">

        <button className={`
          btn
          btn-${theme}
          ${size ? 'btn-' + size : ''}
          ${addClass ? addClass : ''}
        `}>

          <span className="btn-content">{this.props.children}</span>
        </button>
      </div>
    );
  }

}

UIButton.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.string,
  addClass: PropTypes.string,
}

export default UIButton;
