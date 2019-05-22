import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { TodoMainComponent } from './components/todo-main/todo-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoShellComponent,
    TodoMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
