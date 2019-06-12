import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'todo-toolbar',
  templateUrl: './todo-toolbar.component.html',
  styleUrls: ['./todo-toolbar.component.css']
})
export class TodoToolbarComponent implements OnInit {

  // Die Komponente verfügt jetzt über keine Inputs mehr. Nach
  // einer Änderung der ChangeDetection-Strategie muss entsprechend
  // hier aufgebessert werden.

  // Schon jetzt stellt sich ein Problem ein:
  // Da im StateService eine Immutable-Strategie gefahren wird - also
  // jede Änderung am Todos-Array zu einem neuen Todo-Array führt,
  // bekommen wir hier nichts mit.
  // Lösung:
  // a) Die Todos jeweils live aus dem State nehmen (entweder einen
  //    public state oder einen getter für die todos-Property)
  // b) State umstellen auf Observables

  get todos(): Todo[] { return this.state.todos; }

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
  }

  ngOnInit() {
  }

}
