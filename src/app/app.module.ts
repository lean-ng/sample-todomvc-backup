import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { TodoMainComponent } from './components/todo-main/todo-main.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoToolbarComponent } from './components/todo-toolbar/todo-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoShellComponent,
    TodoMainComponent,
    TodoListComponent,
    TodoToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
