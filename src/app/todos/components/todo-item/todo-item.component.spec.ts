import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TodoItemComponent } from './todo-item.component';
import { Todo } from '../../models/todo';
import { ACTIONS, Actions } from '../../services/interfaces/actions.interface';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  let actionsMock: Actions = jasmine.createSpyObj('Actions', ['toggleTodoState', 'removeTodo']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      providers: [{ provide: ACTIONS, useValue: actionsMock }]
    })
    .compileComponents();
  }));

  let mockTodo: Todo;

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    mockTodo = { id: 17, title: 'Angular rocks', completed: false };
    component.todo = mockTodo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays the todo title', () => {
    const labelDE = fixture.debugElement.query(By.css('label'));
    expect(labelDE.nativeElement.innerHTML).toBe(mockTodo.title);
  });

  it('sets the correct checkbox state', () => {

    const checkboxDE = fixture.debugElement.query(By.css('.toggle'));
    expect(checkboxDE.nativeElement.checked).toBeFalsy();

    mockTodo.completed = true;
    fixture.detectChanges();

    expect(checkboxDE.nativeElement.checked).toBeTruthy();
  });

  it('toggle the completed state on changing the checkbox state', () => {

    const checkboxDE = fixture.debugElement.query(By.css('.toggle'));
    checkboxDE.triggerEventHandler('change', {});

    expect(actionsMock.toggleTodoState).toHaveBeenCalledWith(mockTodo);
  });

  it('deleting a todo should call the actions service', () => {

    const todoToDelete = { id: 17, title: 'To Delete', completed: false };

    component.todo = todoToDelete;
    component.remove();

    expect(actionsMock.removeTodo).toHaveBeenCalledWith(todoToDelete);
  });

  it('deleting a todo via DOM call the actions service', () => {

    const todoToDelete = { id: 17, title: 'To Delete', completed: false };
    component.todo = todoToDelete;

    const deleteBtnDE = fixture.debugElement.query(By.css('.destroy'));
    deleteBtnDE.triggerEventHandler('click', {});

    expect(actionsMock.removeTodo).toHaveBeenCalledWith(todoToDelete);
  });

});
