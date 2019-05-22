import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { create } from 'domain';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output()
  create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  createTodo(title: string) {
    this.create.emit(title);
  }
}
