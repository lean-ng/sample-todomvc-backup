import { Todo } from '../../models/todo';
import { InjectionToken } from '@angular/core';

export interface Actions {
  createTodo(title: string): void;
  toggleTodoState(todo: Todo): void;
  updateTodoTitle(todo: Todo, title: string): void;
  removeTodo(todo: Todo): void;
  removeCompletedTodos(): void;
}

export const ACTIONS = new InjectionToken<Actions>('todos.actions');
