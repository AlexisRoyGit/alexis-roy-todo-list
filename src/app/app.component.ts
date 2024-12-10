import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  template: `
    <h2 class="titleform">Formulaire de création :</h2>
    <form #f="ngForm" (ngSubmit)="addTodo(f)">
      <label>Titre</label>
      <input name="title" type="text" placeholder="Entrez votre titre" required ngModel>
      <label>Contenu</label>
      <textarea name="content" rows="10" cols="80" placeholder="Entrez le contenu de votre pense-bête" required ngModel></textarea>
      <label>Auteur</label>
      <input name="author" type="text" placeholder="Entrez votre nom" required ngModel>
      <label>Date</label>
      <input name="date" type="date" placeholder="Entrez la date souhaitée" required ngModel>
      <button type="submit" [disabled]="f.invalid">Créer votre pense-bête</button>
    </form>

    <h2>Filtrage par auteur :</h2>
      <div class="search">
        <input type="search" placeholder="Rechercher par auteur...." [(ngModel)]="author" (keyup.enter)="filterTodo(author)">
        <button type="button" (click)="filterTodo(author)">Rechercher</button>
      </div>

      <ng-container *ngFor="let todo of todos">
        <app-list [title]="todo.title" [content]="todo.content" [author]="todo.author" [date]="todo.date" (delete)="deleteTodo($event)" [ngStyle]="{'margin-left.px':60}"></app-list>
      </ng-container>
  `,
  styleUrls: ['form.css']
})
export class AppComponent implements OnInit {

  /*Ajout le todo créer dans la varaible todos*/
  addTodo(f: NgForm) {
    this.todos.push(f.value);
  }

  /*Stocke les todos dans un tableau de type Todo (todo.ts)*/
  todos: Todo[];

  /*Retourne les todos ayant pour auteur le nom donné */
  filterTodo(author: string) {
    this.todos = this.todos.filter(todo => todo.author === author);
  }

  author: string;

  ngOnInit(): void {
    this.todos = [
      {title : 'Courses',content : 'Acheter du lait et des œufs', author: 'John Doe', date: '2022-05-24'},
      {title : 'Pense bête',content : 'Changer la voiture', author: 'Michel', date: '2022-05-24'},
      {title : 'Rappel',content : 'Aller chercher les enfants', author: 'Romuald', date: '2022-05-24'}
    ];
   
  }

  /*Efface le todo*/
  deleteTodo(title: string) {
    this.todos = this.todos.filter(todo => todo.title !== title);
  }

}