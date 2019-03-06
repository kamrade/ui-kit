import React, { Component } from 'react';
import {IconBase, Dropdown, Sidebar} from 'modules/shared';
import './HeaderMobileMenu.scss';

import navElements from 'modules/orders/const/nav';

class HeaderMobilemenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.showDropdown);
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className="ui-header-mobile-menu">
        <div className="tablet-menu-toggler">
          <IconBase iconName='all_services'/>{''}
        </div>

        <Dropdown>
          <React.Fragment>
            { this.state.showDropdown &&
              <div className="mobile-sidebar-block">
                <div className="mobile-sidebar-toggler">
                  <div onClick={this.handleClick} className="tablet-menu-toggler">
                    <IconBase iconName='all_services'/>{''}
                  </div>
                </div>
                <h4 className="p-2">Orders</h4>
                <Sidebar navElements={navElements} />
              </div>
            }
          </React.Fragment>
        </Dropdown>

      </div>

    );
  }

}

export default HeaderMobilemenu;
