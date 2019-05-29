import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  todos: Todo[] = [];

  constructor() { }

  createTodo(title: string) {
    // Achtung: das Array wird hier nur mutiert - also lediglich ein
    // neues Element angehangen. Probleme werden kommen mit Änderung
    // der ChangeDetection-Strategie.
    this.todos.push({ id: -1, title, completed: false });
  }

  toggleTodoState(todo: Todo) {
    // Achtung: ich mutiere hier das Objekt nur. Wird sich im späteren Verlauf als
    // problematisch herausstellen
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    // Achtung: gleiches wie oben - nur Mutation. Und dazu eine sehr Old-School Implementierung.
    const ix = this.todos.indexOf(todo);
    this.todos.splice(ix, 1);
  }
}
