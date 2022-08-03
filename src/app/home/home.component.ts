import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
todoCount: number = 4;
btnTxt: string = 'Add';
ToDoTxt: string = ''
todos: any = (this.cookie.get('todosList')).split(',');
color: string = "white";
clicked: {[key: number]: string} = {};
edit: boolean = false;




  constructor(private cookie: CookieService) {


  }



  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addItem() {
    if (this.ToDoTxt !== "" ) {
      this.todos.push(this.ToDoTxt);
      this.cookie.set("todosList", (this.todos))
      this.ToDoTxt ="";
      this.todoCount = this.todos.length;
    }


  }

  deleteItem(i: number) {
    this.todos.splice(i, 1);
    this.cookie.set("todosList", (this.todos))
    this.todoCount = this.todos.length;
  }

  editItem(i: number) {
    if (this.edit === false) {
      this.edit = true;


    } else {
      this.edit = false;
    }

  }


  itemStatus(i: number) {
    if (this.edit === false) {
      if (this.clicked[i] === "salmon") {
        this.clicked[i] = "white";
      } else if (this.clicked[i] === "white") {
        this.clicked[i] = "limegreen";
      } else {
        this.clicked[i] = "salmon";
      }
    } else {

    }
  }

}
