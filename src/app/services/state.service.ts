import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  todos: Todo[] = [];

  constructor() { }

  createTodo(title: string) {
    this.todos.push({ id: -1, title, completed: false });
  }
}
