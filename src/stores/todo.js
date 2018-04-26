import { observable, action, computed } from 'mobx';
class NewTodo {
  @observable title;
  @observable id = Date.now();

  constructor (title) {
    this.title = title;
  }
}
class Todo {
  @observable todos = [
    {title: 'react', id: 123}
  ];

  @action create = (value) => {
    this.todos.push(new NewTodo(value));
  }

  @computed get tellme () {
    return this.todos.length;
  }
}

export default new Todo();
