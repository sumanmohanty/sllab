import { Component, OnInit } from '@angular/core';
import { todoservice } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private to: todoservice) { }

  ngOnInit() {
  }
  newitem
  pushitem()
  {
    if(this.newitem!="")
    {
      this.to.pushItem(this.newitem)
    }
  }

}
