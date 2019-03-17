import React from 'react';
import { Link } from 'react-router-dom';

const AppNavigation = () => (
  <div className="app-navigation container pt-8">
    <Link to="/ma"><p className="app-navigation-element mb-3">Merchant Account</p></Link>
    <Link to="/elements"><p className="app-navigation-element mb-3">Elements</p></Link>
  </div>
);

export default AppNavigation;
