import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Todo } from '../../models/todo';
import { Actions, ACTIONS } from '../../services/interfaces/actions.interface';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  editMode = false;
  editText = '';

  constructor(@Inject(ACTIONS) private actions: Actions) { }

  ngOnInit() {
  }

  toggleState() {
    this.actions.toggleTodoState(this.todo);
  }

  remove() {
    this.actions.removeTodo(this.todo);
  }

  beginEdit() {
    this.editMode = true;
    this.editText = this.todo.title;
  }

  cancelEdit() {
    this.editMode = false;
  }

  commitEdit() {
    const title = this.editText.trim();
    if (title.length === 0) {
      this.remove();
    } else {
      this.todo.title = title;
    }
    this.editMode = false;
  }
}
