import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMainComponent } from './todo-main.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'todo-list',
  template: '<div>List</div>'
})
class MockTodoListComponent {
  @Input()
  todos: Todo[];
}

describe('TodoMainComponent', () => {
  let component: TodoMainComponent;
  let fixture: ComponentFixture<TodoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMainComponent, MockTodoListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the main section on empty todos list', () => {

    const mainSection: HTMLElement = fixture.debugElement.query(By.css('section.main')).nativeElement;

    component.todos = [];
    fixture.detectChanges();

    expect(mainSection.classList.contains('hidden')).toBeTruthy();
  });

  it('should set the todo list input property', () => {

    const listComponent = fixture.debugElement.query(By.directive(MockTodoListComponent));
    component.todos = [ { id: 1, title: 'yeeaah', completed: false} ];

    fixture.detectChanges();

    expect(listComponent.componentInstance.todos).toBe(component.todos);
  });
});
