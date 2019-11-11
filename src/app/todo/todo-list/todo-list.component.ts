import { Component, OnInit } from '@angular/core';
import { todoservice } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private to:todoservice) { }

  ngOnInit() {
    this.items=this.to.getlist()

  }
  remove(index){
    this.to.removeitem(index)
  }
  items =[]



}
