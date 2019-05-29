import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputComponent } from './todo-input.component';
import { By } from '@angular/platform-browser';

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('creating a todo via instance should fire the event', (done) => {

    component.create.subscribe( () => {
      done();
    });

    component.createTodo('Test');
  });

  it('creating a todo via DOM should fire the event', (done) => {

    component.create.subscribe( () => {
      done();
    });

    const inputFieldDE = fixture.debugElement.query(By.css('input'));

    inputFieldDE.nativeElement.value = 'Test';
    inputFieldDE.triggerEventHandler('keyup.enter', {});
  });
});
