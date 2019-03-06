import { Component } from 'react';
import ReactDOM from 'react-dom';

import './Dropdown.scss';

const dropdownRoot = document.getElementById('dropdown-root');

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add('ui-dropdown');
  }

  componentDidMount() {
    dropdownRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    dropdownRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }

}

export default Dropdown;
