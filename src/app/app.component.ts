import { Component } from '@angular/core';
import { trigger, animate, style, transition, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        style({ transform: 'translateX(300px)' }),
        animate(
          500,
          keyframes([
            style({ opacity: 0, transform: 'translateX(300px)' }),
            style({ opacity: 1, transform: 'translateX(0)' }),
          ])
        ),
      ]),

      transition('*=>void', [
        style({ transform: 'translateX(0px)' }),
        animate(
          200,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0px)' }),
            style({ opacity: 0, transform: 'translateX(300px)' }),
          ])
        ),
      ]),
    ]),
  ],
  
})
export class AppComponent {
  title = 'simple-project';
  todoArray : string[] = [];
  todosArray : string[] = ['test','test','test'];

  isRight = true;
  toggleAnimation(){
    this.isRight = !this.isRight;
  }

  addTodo(value:string){
    if(value !== ""){
      this.toggleAnimation()
      this.todoArray.push(value)
    }
  }
  deleteItem(value:any){
    console.log(value.target.id)
    this.todoArray.splice(value.target.id, 1)
  }

  todoSubmit(value:any){
    console.log(value);
    if(value.todo !== ""){
      this.todoArray.push(value.todo);
    }
  }
}
