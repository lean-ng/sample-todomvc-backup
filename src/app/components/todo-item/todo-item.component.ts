import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  removeTodo = new EventEmitter<void>();

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  toggleState() {
    this.state.toggleTodoState(this.todo);
  }

  remove() {
    this.removeTodo.emit();
  }
}
