import { observable, action, computed } from 'mobx';

class Todo {
  @observable title;
  @observable id = Date.now();
  @observable checked = false;

  constructor (title) {
    this.title = title;
  }
}

class TodoStore {
  @observable todos = [
    {title: 'react', id: 123, checked: true}
  ];

  @action create = (value) => {
    this.todos.push(new Todo(value));
  }

  @action checked = (id) => {
    this.todos.forEach((todo, i) => {
      if (todo.id === id) {
        this.todos[i].checked = !this.todos[i].checked;
      }
    });
  }

  @computed get tellme () {
    return this.todos.length;
  }
}

export default new TodoStore();
