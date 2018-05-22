import { toJS, observable, computed } from 'mobx';

import HomeService from '@services/HomeService';

import CustomerModel from '@models/CustomerModel';

export default new class HomeController {
  @observable header = '这是header';
  @observable footer = '这是footer';

  @observable customers = [];

  constructor() {
    this.getCustomers();
  }

  async getCustomers() {
    let data = await HomeService.getCustomers();
    this.customers = data.list.map((item) => {
      return new CustomerModel(item);
    });
  }
};