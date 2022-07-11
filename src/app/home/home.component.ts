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
todos: any = [];
color: string = "white";



  constructor(private cookie: CookieService) {


   }

  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addItem() {
    if (this.ToDoTxt !== "" ) {
      this.todos.push(this.ToDoTxt);
      this.cookie.set("l", "todos")
      this.ToDoTxt ="";
      this.todoCount = this.todos.length;
    }


  }

  deleteItem(i: number) {
    this.todos.splice(i, 1);
  }

  itemStatus(i: number) {
    if (this.color === "salmon" ) {
      this.color = "white";
    } else if (this.color === "white") {
      this.color = "limegreen";
    } else {
      this.color = "salmon";
    }
  }

}
