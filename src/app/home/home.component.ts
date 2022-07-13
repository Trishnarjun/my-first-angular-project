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
  }

  itemStatus(i: number) {
    if (this.clicked[i] === "salmon") {
      this.clicked[i] = "white";
    } else if (this.clicked[i] === "white") {
      this.clicked[i] = "limegreen";
    } else {
      this.clicked[i] = "salmon";
    }
    // if (this.color === "salmon" ) {
    //   this.color = "white";
    // } else if (this.color === "white") {
    //   this.color = "limegreen";
    // } else {
    //   this.color = "salmon";
    // }
  }

}
