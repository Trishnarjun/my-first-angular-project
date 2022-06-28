import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
todoCount: number = 4;
btnTxt: string = 'Add';
ToDoTxt: string = 'New Todo'
todos: any = [];



  constructor() { }

  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addItem() {
    this.todos.push(this.ToDoTxt);
    this.ToDoTxt ="";
    this.todoCount = this.todos.length;
  }

}
