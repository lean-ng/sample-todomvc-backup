import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createTodo(title: string) {
    console.log('Request for a new todo:', title);
  }
}
