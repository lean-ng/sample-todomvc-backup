import { TestBed, inject, async } from '@angular/core/testing';

import { LocalStoreService } from './local-store.service';
import { Todo } from '../models/todo';

describe('LocalStoreService', () => {

  const storage = {};

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: Storage, useFactory: () => storage }]
  }));

  let store: LocalStoreService;
  let firstTodo: Todo;
  let secondTodo: Todo;

  it('should be created', () => {
    const storeService: LocalStoreService = TestBed.get(LocalStoreService);
    expect(storeService).toBeTruthy();

    // sichern für Test-Variante 3
    store = storeService;
  });

  // Test-Variante 1:
  // - Service vom Container anfordern
  // - asynchrones Testen mit jasmine done
  it('should initially have zero todos', (done) => {
    const storeService: LocalStoreService = TestBed.get(LocalStoreService);
    storeService.getAll().then(todos => {
      expect(todos.length).toBe(0);
      done();
    });
  });

  // Test-Variante 2:
  // - Service über inject-Helper injezieren
  // - asynchrones Testen mit async-Helper
  it('shoud create a first todo', async(inject([LocalStoreService], (storeService: LocalStoreService) => {
    storeService.create('First Todo').then( todo => {
      expect(todo.title).toBe('First Todo');
      expect(todo.completed).toBeFalsy();
      firstTodo = todo;
    });
  })));

  // Test-Variante 3:
  // - Service über lokale Variable übernehmen
  // - asynchrones Testen mit async/await
  it('should add a second todo', async () => {
    secondTodo = await store.create('Second Todo');
    const todos = await store.getAll();
    expect(todos.length).toBe(2);
  });

  it('should update a todo', async () => {

    const firstUpdatedTodo = await store.update(firstTodo.id, { completed: !firstTodo.completed});
    expect(firstUpdatedTodo.completed).toBeTruthy();
    const secondUpdatedTodo = await store.update(secondTodo.id, { title: 'Updated' });
    expect(secondUpdatedTodo.title).toBe('Updated');

    const todos = await store.getAll();
    expect(todos[0]).toEqual(firstUpdatedTodo);
    expect(todos[1]).toEqual(secondUpdatedTodo);
  });

  it('should delete a todo', async() => {
    await store.remove(firstTodo.id);
    const todos = await store.getAll();
    expect(todos.length).toBe(1);
  });
});
