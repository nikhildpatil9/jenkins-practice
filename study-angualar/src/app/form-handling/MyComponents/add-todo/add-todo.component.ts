import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todos/todos.component';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title!:string;
  desc!:string ;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
   
    this.todoAdd.emit( {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    });

  }

}
