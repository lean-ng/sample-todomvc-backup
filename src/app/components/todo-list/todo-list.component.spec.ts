import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  const listItemQuery = By.css('ul.todo-list li');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
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
});
