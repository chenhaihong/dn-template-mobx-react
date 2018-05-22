// 用户模型
import { observable, computed } from 'mobx';

export default class Customer {
  @observable id = 0;
  @observable first_name = '';
  @observable last_name = '';

  @computed get name() {
    return `${this.first_name} ${this.last_name}`;
  }

  @computed get saying() {
    return `${this.name} likes basketball.`;
  }

  constructor(data) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
  }

  hello() {
    alert(`Hello, my name is ${this.name}`);
  }
}