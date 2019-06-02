import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo';
import { StateService } from '../../services/state.service';

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

}
