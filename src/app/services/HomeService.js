import { get } from '@helpers/http';

export default class HomeService {
  static getCustomers = (params) => {
    return get('/home/customers.api', params);
  }
}