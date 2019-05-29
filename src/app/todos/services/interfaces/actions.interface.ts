import { Todo } from '../../models/todo';

export interface Actions {
  createTodo(title: string): void;
  toggleTodoState(todo: Todo): void;
  updateTodoTitle(todo: Todo, title: string): void;
  removeTodo(todo: Todo): void;
  removeCompletedTodos(): void;
}
