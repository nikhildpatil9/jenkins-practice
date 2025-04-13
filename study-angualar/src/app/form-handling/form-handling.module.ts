import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHandlingRoutingModule } from './form-handling-routing.module';
import { FormHandlingComponent } from './form-handling.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { AngularMaterialComponentsModule } from '../angular-material-components/angular-material-components.module';


@NgModule({
  declarations: [
    FormHandlingComponent,
    AboutComponent,AddTodoComponent,TodoItemComponent,TodosComponent
  ],
  imports: [
  AngularMaterialComponentsModule,
    CommonModule,
    FormHandlingRoutingModule
  ]
})
export class FormHandlingModule { }
