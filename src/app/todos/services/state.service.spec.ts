import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { LocalStoreService } from './local-store.service';
import { Todo } from '../models/todo';

describe('StateService', () => {

  let mockStore = { getAll: () => {}, create: () => {}, update: () => {}, remove: () => {}};
  let todo1: Todo = { id: 17, title: 'E2E Tests', completed: false };
  let todo2: Todo = { id: 42, title: 'Unit Tests', completed: true };
  let todo3: Todo = { id: 59, title: 'Integration Tests', completed: true };
  let updated1: Todo = { id: 42, title: 'Unit Tests', completed: false };
  let updated2: Todo = { id: 17, title: 'E2E Tests with Protractor', completed: false };

  beforeEach(() => {
    spyOn(mockStore, 'getAll').and.returnValue( new Promise(resolv => { resolv([]) }) );
    spyOn(mockStore, 'create').and.returnValues(
      new Promise(resolv => { resolv(todo1) }),
      new Promise(resolv => { resolv(todo2) }),
      new Promise(resolv => { resolv(todo3) })
    )
    spyOn(mockStore, 'update').and.returnValues(
      new Promise(resolv => { resolv(updated1) }),
      new Promise(resolv => { resolv(updated2) })
    )
    spyOn(mockStore, 'remove').and.returnValue( new Promise(resolv => { resolv(null) }) );
  });

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: LocalStoreService, useValue: mockStore }]
  }));

  it('should be creatable by DI', () => {
    const service: StateService = TestBed.get(StateService);
    expect(service).toBeTruthy();
  });

  describe('State API', () => {

    let service: StateService;

    beforeEach(() => {
      service = TestBed.get(StateService);
    });

    it('should have todos porperty', () => {
      expect(service.todos).toBeDefined();
    });
  });

  describe('Actions API', () => {

    let service: StateService;

    beforeEach(() => {
      service = TestBed.get(StateService);
    });

    it('should create a new todo', async () => {

      await service.createTodo(todo1.title);

      expect(mockStore.create).toHaveBeenCalledWith(todo1.title);
      expect(service.todos.length).toBe(1);
    });

    it('should toggle a todo state', async () => {

      await service.createTodo(todo1.title);
      await service.createTodo(todo2.title);
      await service.toggleTodoState(todo2);

      expect(mockStore.update).toHaveBeenCalledWith(todo2.id, { completed: false });
      expect(service.todos[1].completed).toBeFalsy();
    });

    it('should update a todo title', async () => {

      await service.createTodo(todo1.title);
      await service.createTodo(todo2.title);
      await service.toggleTodoState(todo2);
      await service.updateTodoTitle(todo1, updated2.title);

      expect(mockStore.update).toHaveBeenCalledWith(updated2.id, { title: updated2.title });
      expect(service.todos[0].title).toBe(updated2.title);
    });

    it('should remove a todo', async () => {
      await service.createTodo(todo1.title);
      await service.createTodo(todo2.title);
      await service.removeTodo(todo1);

      expect(mockStore.remove).toHaveBeenCalledWith(todo1.id);
      expect(service.todos.length).toBe(1);
    });

    it('should remove all completed todos', async () => {
      await service.createTodo(todo1.title);
      await service.createTodo(todo2.title);
      await service.createTodo(todo3.title);
      await service.removeCompletedTodos();

      expect(mockStore.remove).toHaveBeenCalledTimes(2);
      expect(service.todos.length).toBe(1);
    });

  });

});
