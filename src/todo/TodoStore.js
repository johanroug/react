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

  createTodo = (e) => {
    if (e.which === 13) {
      this.todos.push(new Todo(e.target.value));
      e.target.value = '';
    }
  }

  delete = (id) => {
    this.todos.forEach((item, i) => {
      if (item.id === id) {
        this.todos.splice(i, 1);
      }
    });
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
