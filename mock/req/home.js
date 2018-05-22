import customers from '../res/home/customers.json';

// mock 示例
faked.when('get', '/home/customers.api', function () {
  this.send(customers);
});