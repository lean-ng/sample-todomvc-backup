import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'todo-toolbar',
  templateUrl: './todo-toolbar.component.html',
  styleUrls: ['./todo-toolbar.component.css']
})
export class TodoToolbarComponent implements OnInit {

  @Input()
  todos: Todo[];

  // Hoppla, Redundanz! (siehe todo-main)
  //
  // Lösung: entweder Logik auf dem State implementieren und diesen als
  // Input herunterreichen (wie tief soll das gehen?). Oder die Komponente
  // später reaktiv auf State-Änderungen programmieren.

  get isListEmpty() {
    return !this.todos || this.todos.length === 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
