import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private actions: StateService) { }

  ngOnInit() {
  }

  toggleState() {
    this.actions.toggleTodoState(this.todo);
  }

  remove() {
    this.actions.removeTodo(this.todo);
  }
}
