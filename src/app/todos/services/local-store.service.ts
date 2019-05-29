import { Injectable } from '@angular/core';
import { Store } from './interfaces/store.interface';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService implements Store{

  constructor(public storage: Storage) { }

  async getAll(): Promise<Todo[]> {
    return this.loadTodos();
  }

  async create(title: string): Promise<Todo> {
    const newTodo: Todo = { id: this.generateId(), title, completed: false };

    const todos  = this.loadTodos();
    todos.push(newTodo);
    this.saveTodos(todos);

    return newTodo;
  }

  async update(id: number, changes: { title?: string; completed?: boolean; }): Promise<Todo> {
    const todos = this.loadTodos();

    const todo = todos.find(t => t.id === id);
    Object.assign(todo, changes);
    this.saveTodos(todos);

    return todo;
  }

  async remove(id: number): Promise<void> {
    const todos = this.loadTodos();

    const ix = todos.findIndex(t => t.id === id);
    todos.splice(ix, 1);
    this.saveTodos(todos);
  }

  private loadTodos(): Todo[] {
    return JSON.parse(this.storage.todos || '[]');
  }

  private saveTodos(todos: Todo[]) {
    this.storage.todos = JSON.stringify(todos);
  }

  private generateId(): number {
    let id = JSON.parse(this.storage.nextId || '1');
    this.storage.nextId = id + 1;
    return id;
  }
}
