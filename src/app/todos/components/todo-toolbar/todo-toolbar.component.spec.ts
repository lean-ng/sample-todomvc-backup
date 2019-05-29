import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoToolbarComponent } from './todo-toolbar.component';
import { StateService } from '../../services/state.service';

describe('TodoToolbarComponent', () => {
  let component: TodoToolbarComponent;
  let fixture: ComponentFixture<TodoToolbarComponent>;

  const state = { todos: [] };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoToolbarComponent ],
      providers: [ {provide: StateService, useValue: state} ]
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
    expect(toolbarFooter.classList.contains('hidden')).toBeTruthy();
  });

  it('should show the toolbar footer if there are todos in the list', () => {
    component.todos.push({ id: 17, title: 'Toolbar', completed: false });
    fixture.detectChanges();
    const toolbarFooter: HTMLElement = fixture.debugElement.query(By.css('footer.footer')).nativeElement;
    expect(toolbarFooter.classList.contains('hidden')).toBeFalsy();
  });

  it('should render the correct count of active todo items', () => {
    const countElt: HTMLElement = fixture.debugElement.query(By.css('.todo-count strong')).nativeElement;

    component.todos.splice(0);
    fixture.detectChanges();
    expect(countElt.innerHTML).toBe('0');

    component.todos.push({ id: 17, title: 'Toolbar', completed: false });
    fixture.detectChanges();
    expect(countElt.innerHTML).toBe('1');

    component.todos[0].completed = true;
    fixture.detectChanges();
    expect(countElt.innerHTML).toBe('0');
  });
});
