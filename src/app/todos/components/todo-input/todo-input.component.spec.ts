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

  it('should trim the entered title', (done) => {

    component.create.subscribe( (ev) => {
      expect(ev).toBe('Space Around');
      done();
    });

    component.createTodo('  Space Around  ');
  });

  it('should not accept an empty title', () => {

    spyOn(component.create, 'emit');

    component.createTodo('  ');
    component.createTodo('');

    expect(component.create.emit).not.toHaveBeenCalled();
  });

  it('should clear the input field after entering', () => {

    const inputFieldDE = fixture.debugElement.query(By.css('input'));

    inputFieldDE.nativeElement.value = 'Test';
    inputFieldDE.triggerEventHandler('keyup.enter', {});

    expect(inputFieldDE.nativeElement.value).toBe('');
  });
});
