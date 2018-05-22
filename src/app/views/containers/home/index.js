import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Body from './cell/body';
import Header from '@components/Header';
import Footer from '@components/Footer';

@observer
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Home;