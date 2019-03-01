import React from 'react';
import PropTypes from 'prop-types';
import "./Navigation.scss";

import NavigationBlock from './navigation-block/NavigationBlock';

const Navigation = (props) => (
  <div className="ui-navigation">

    {
      props.navElements.map((navItem, key) => {
        return (
          <div key={key}>
            <NavigationBlock
              iconName={navItem.icon}
              text={navItem.title}
              path={navItem.path}
            />
          </div>
        )
      })
    }
  </div>
);

Navigation.propTypes = {
  navElements: PropTypes.array
}

export default Navigation;
