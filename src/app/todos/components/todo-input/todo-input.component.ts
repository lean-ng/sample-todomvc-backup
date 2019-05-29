import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html'
})
export class TodoInputComponent {

  @Output()
  create = new EventEmitter<string>();

  createTodo(title: string) {
    this.create.emit(title);
  }
}
