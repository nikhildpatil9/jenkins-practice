import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todos/todos.component';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo ;
  @Input() i!: number ;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo  ){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo: any ){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
