import {observable} from 'mobx';

class Todo {
  @observable title;
  @observable id = Date.now();
  @observable checked = false;

  constructor (title) {
    this.title = title;
  }
}
export default Todo;
