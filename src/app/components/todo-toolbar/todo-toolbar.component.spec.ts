import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoToolbarComponent } from './todo-toolbar.component';
import { By } from '@angular/platform-browser';

describe('TodoToolbarComponent', () => {
  let component: TodoToolbarComponent;
  let fixture: ComponentFixture<TodoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the toolbar footer on empty todos list', () => {

    const toolbarFooter: HTMLElement = fixture.debugElement.query(By.css('footer.footer')).nativeElement;

    component.todos = [];
    fixture.detectChanges();

    expect(toolbarFooter.classList.contains('hidden')).toBeTruthy();
  });
});
