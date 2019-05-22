import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent implements OnInit {

  @Input()
  todos: Todo[];

  get isListEmpty() {
    return !this.todos || this.todos.length === 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
