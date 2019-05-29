import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  removeTodo(todo: Todo) {
    this.state.deleteTodo(todo);
  }
}
