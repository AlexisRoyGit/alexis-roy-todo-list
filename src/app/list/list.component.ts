import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <div class="todo">
    <h3>{{title | uppercase}}</h3>
    <p>{{content}}</p>
    <p class="author">{{author}}</p>
    <small>{{date | date:'dd/MM/y'}}</small>
    <button (click)="deleteList()">Effacer</button>
    </div>
  `,
  styleUrls: ['list.css']
})
export class ListComponent {
    @Input()
    title: string;

    @Input()
    content: string;

    @Input()
    author: string;

    @Input()
    date: string;

    @Output()
    delete = new EventEmitter();

    /*Envoie le titre du todo à effacer qui sera récupérer par deleteTodo() dans l'app.component */
    deleteList() {
      this.delete.emit(this.title);
    }

}
