import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TodoShellComponent } from './todo-shell.component';

describe('TodoShellComponent', () => {
  let component: TodoShellComponent;
  let fixture: ComponentFixture<TodoShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoShellComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
