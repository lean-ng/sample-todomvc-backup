import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todo-toolbar',
  templateUrl: './todo-toolbar.component.html',
  styleUrls: ['./todo-toolbar.component.css']
})
export class TodoToolbarComponent implements OnInit {

  // Die Komponente verfügt jetzt über keine Inputs mehr. Nach
  // einer Änderung der ChangeDetection-Strategie muss entsprechend
  // hier aufgebessert werden.

  todos: Todo[];

  // Hoppla, Redundanz! (siehe todo-main)
  //
  // Lösung: Logik auf dem State implementieren

  get isListEmpty() {
    return !this.todos || this.todos.length === 0;
  }

  get activeCount() {
    return this.todos.reduce( (count, t) => t.completed ? count : count + 1, 0);
  }

  constructor(private state: StateService) {
    this.todos = state.todos;
  }

  ngOnInit() {
  }

}
