import React, { Component } from 'react';
import { observer } from 'mobx-react';

import HomeController from '@controllers/HomeController';

@observer
class Body extends Component {
  handleClick = (customer) => {
    customer.hello();
  }

  renderCustomers = () => {
    return HomeController.customers.map((item) => {
      return (
        <div key={item.name}>
          <span>{item.name}: {item.saying}</span>
          <button onClick={this.handleClick.bind(this, item)}>hello</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>body</h1>
        {this.renderCustomers()}
      </div>
    );
  }
}

export default Body;