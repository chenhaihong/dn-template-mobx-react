import './style/Header';

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import HomeController from '@controllers/HomeController';

@observer
class Header extends Component {
  render() {
    return (
      <div className={'header'}>
        <h1>@components/Header</h1>
        <p>{HomeController.header}</p>
      </div>
    );
  }
}

export default Header;