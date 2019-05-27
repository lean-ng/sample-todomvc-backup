import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { Todo } from 'src/app/models/todo';
import { By } from '@angular/platform-browser';
import { StateService } from 'src/app/services/state.service';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  let stateServiceMock = jasmine.createSpyObj('StateService', ['toggleTodoState']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      providers: [{ provide: StateService, useValue: stateServiceMock }]
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

    expect(stateServiceMock.toggleTodoState).toHaveBeenCalledWith(mockTodo);
  });
});