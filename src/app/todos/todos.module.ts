import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { TodoMainComponent } from './components/todo-main/todo-main.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoToolbarComponent } from './components/todo-toolbar/todo-toolbar.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodoShellComponent,
    TodoMainComponent,
    TodoListComponent,
    TodoToolbarComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoShellComponent
  ]
})
export class TodosModule { }
