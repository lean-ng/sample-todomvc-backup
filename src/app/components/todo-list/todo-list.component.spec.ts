import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todo-item',
  template: '<li>{{ todo.title }}</li>'
})
class TodoItemMockComponent {

  @Input()
  todo: Todo;

  @Output()
  removeTodo = new EventEmitter<Todo>();

  remove() {
    this.removeTodo.emit(this.todo);
  }
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  const stateServiceMock = jasmine.createSpyObj('StateService', ['deleteTodo']);
  const listItemQuery = By.css('ul.todo-list li');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent, TodoItemMockComponent ],
      providers: [{ provide: StateService, useValue: stateServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render zero list items on empty todo list', () => {

    component.todos = [];
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(listItemQuery).length).toBe(0);
  });

  it('should correctly sets/removes the `completed` class', () => {

    component.todos = [{ id: -1, title: 'Test Completed', completed: false }];
    fixture.detectChanges();

    expect(fixture.debugElement.query(listItemQuery).classes.completed).toBeFalsy();

    component.todos[0].completed = true;
    fixture.detectChanges();

    expect(fixture.debugElement.query(listItemQuery).classes.completed).toBeTruthy();
  });

  it('should listen on the delete request and call the state in the handler', () => {

    const mockTodo = { id: -1, title: 'Test Completed', completed: false };
    component.todos = [ mockTodo ];
    fixture.detectChanges();

    fixture.debugElement.query(By.directive(TodoItemMockComponent)).triggerEventHandler('removeTodo', mockTodo);

    expect(stateServiceMock.deleteTodo).toHaveBeenCalledWith(mockTodo);
  });
});
