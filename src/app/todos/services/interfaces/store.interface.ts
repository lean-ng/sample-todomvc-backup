import { Todo } from '../../models/todo';

/**
 * Interface: Store
 *
 * Die Methoden werden asynchron definiert um säter auch asynchrone Stores zu ermöglichen
 */
export interface Store {
  getAll(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
  update(id: number, changes: { title?: string, completed?: boolean}): Promise<Todo>;
  remove(id: number): Promise<void>;
}
