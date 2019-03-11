import React, { Component } from 'react';

import './Select.scss';

import {IconBase, Dropdown} from 'modules/shared';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      top: 0,
      left: 0,
      width: 0,
      isLoading: true
    };

    this.$select = React.createRef();
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {

    clearTimeout(this.timeout);

    const top = this.$select.current.getBoundingClientRect().top + this.$select.current.getBoundingClientRect().height;
    const left = this.$select.current.getBoundingClientRect().left;
    const width = this.$select.current.getBoundingClientRect().width;

    const self = this;
    this.timeout = setTimeout(function() {
      self.setState({
        isLoading: false
      });
    }, 1200);

    this.setState({
      showDropdown: !this.state.showDropdown,
      top: top,
      left: left,
      width: width,
      isLoading: true
    });
  }

  render() {

    const dropdownStyle = {
      top: this.state.top + 'px',
      left: this.state.left + 'px',
      width: this.state.width + 'px',
    };

    return (
      <React.Fragment>

        <div ref={this.$select} onClick={this.toggleDropdown}
          className={`ui-select form-control ${this.state.showDropdown ? 'active' : ''}`}>
          { this.state.isLoading ? (
            <span className="value-loading">Loading…</span>
          ) : (
            <span>Currency</span>
          ) }
          <div className={`ui-select-icon ${this.state.isLoading ? 'is-loading' : ''}`}>
            { !this.state.isLoading &&
              <IconBase iconName='chevron_down_xs'/>
            }
            { this.state.isLoading &&
              <IconBase iconName='preloader'/>
            }
          </div>
        </div>

        <Dropdown>
          { this.state.showDropdown &&

            <React.Fragment>
              { !this.state.isLoading &&
                <div
                  style={dropdownStyle}
                  className="ui-dropdown-list">
                  <div className="ui-dropdown-item">USD</div>
                  <div className="ui-dropdown-item">EUR</div>
                  <div className="ui-dropdown-item">JPY</div>
                  <div className="ui-dropdown-item">THB</div>
                  <div className="ui-dropdown-item">PLZ</div>
                </div>
              }

              { this.state.isLoading &&
                <div
                  style={dropdownStyle}
                  className="ui-dropdown-list is-loading">

                  <div className="ui-dropdown-loading-list-item"></div>
                  <div className="ui-dropdown-loading-list-item"></div>
                  <div className="ui-dropdown-loading-list-item"></div>

                </div>
              }
            </React.Fragment>

          }
        </Dropdown>
      </React.Fragment>
    );
  }

}

export default Select;
