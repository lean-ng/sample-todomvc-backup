import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.css']
})
export class TodoShellComponent implements OnInit {

  // Vorsicht:
  // Falls der state ´privat´ injeziert wird und die todos-Property
  // auf eine Instanz-Variable kopiert wird (Referenz!), muss jede
  // State-Manipulation (Löschen, Ändern, Neues Todo) das Original-Array
  // mutieren und keinesfalls neu setzen auf dem State (zum Beispiel beim
  // Löschen über die filter-Methode).
  //
  // Da ich insgesamt eine Immutable-Strategie schon jetzt anstrebe ist die
  // bessere Option die public-Injektion und das weitergeben der todos-Property
  // ohne lokale Kopie der Referenz

  constructor(public state: StateService) { }

  ngOnInit() {
  }

}
