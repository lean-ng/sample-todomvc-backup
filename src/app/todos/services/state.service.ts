import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { State } from './interfaces/state.interface';
import { Actions } from './interfaces/actions.interface';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class StateService implements State, Actions {

  todos: Todo[] = [];

  constructor(private store: LocalStoreService) {
    this.store.getAll().then( todos => { this.todos = todos; });
  }

  async createTodo(title: string) {
    const todo = await this.store.create(title);
    this.todos = [ ...this.todos, todo ];
  }

  async toggleTodoState(todo: Todo) {
    const updatedTodo = await this.store.update(todo.id, { completed: !todo.completed });
    const ix = this.todos.findIndex( t => t.id === todo.id );
    this.todos = [ ...this.todos.slice(0, ix), updatedTodo, ...this.todos.slice(ix + 1) ];
  }

  async updateTodoTitle(todo: Todo, title: string) {
    const updatedTodo = await this.store.update(todo.id, { title });
    const ix = this.todos.findIndex( t => t.id === todo.id );
    this.todos = [ ...this.todos.slice(0, ix), updatedTodo, ...this.todos.slice(ix + 1) ];
  }

  async removeTodo(todo: Todo) {
    await this.store.remove(todo.id);
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  async removeCompletedTodos() {
    await Promise.all(this.todos.filter(t => t.completed).map(t => this.store.remove(t.id)));
    this.todos = this.todos.filter(t => !t.completed);
  }
}
