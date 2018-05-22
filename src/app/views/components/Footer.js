import './style/Footer';

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import HomeController from '@controllers/HomeController';

@observer
class Footer extends Component {
  render() {
    return (
      <div className={'footer'}>
        <h1>@components/Footer</h1>
        <p>{HomeController.footer}</p>
      </div>
    );
  }
}

export default Footer;