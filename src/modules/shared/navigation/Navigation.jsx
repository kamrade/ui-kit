import React from 'react';
import PropTypes from 'prop-types';
import "./Navigation.scss";

import NavigationBlock from './navigation-block/NavigationBlock';

const Navigation = (props) => (
  <div className="ui-navigation">

    {
      props.navElements.map((navItem, key) => {

        if (navItem.type === 'link') {
          return (
            <div key={key}>
              <NavigationBlock
                iconName={navItem.icon}
                text={navItem.title}
                path={navItem.path}
              />
            </div>
          );
        } else if (navItem.type === 'group') {

          return (
            <div key={key} className="nav-group">
              <p className="nav-group-title">{navItem.title}</p>
              <div className="nav-group-items">
                {navItem.children.map((navChild, k) => {
                  return (
                    <div key={k}>
                      <NavigationBlock
                        iconName={navChild.icon}
                        text={navChild.title}
                        path={navChild.path}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else {
          return null;
        }




      })
    }
  </div>
);

Navigation.propTypes = {
  navElements: PropTypes.array
}

export default Navigation;
