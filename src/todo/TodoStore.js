import { observable, computed } from 'mobx';
import Todo from './Todo';

class TodoStore {
  @observable todos = [
    {title: 'lo', id: 1, checked: false},
    {title: 'ib', id: 2, checked: true}
  ]
  @observable filter = '';

  @computed get filteredTodo () {
    const matchesFilter = new RegExp(this.filter, 'i');
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.title));
  }

  createTodo = (value) => {
    this.todos.push(new Todo(value));
  }

  toggleChecked = (id) => {
    this.todos.forEach((item, i) => {
      if (item.id === id) {
        this.todos[i].checked = !this.todos[i].checked;
      }
    });
  }
}

const store = new TodoStore();
export default store;
