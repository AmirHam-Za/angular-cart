import { Component } from '@angular/core';
import { Todo } from '../model';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { OnInit  } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todoList: Todo[] = [];
  todo: Todo = this.initodo;
  searchTerm: string = '';

  get initodo(): Todo {
    return {
      Title: '',
      Id: null,
      Price:'',
      // Image: ''
    };
  }
  ngOnInit(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todoList = JSON.parse(savedTodos);
    } 
   }

   addTodo(): void {
    if (this.todo.Id) {
      this.todoList = this.todoList.map(o => {
        if (o.Id === this.todo.Id) {
          return { ...this.todo };
        }
        return o;
      });
    } else {
      this.todo.Id = Date.now();
      this.todoList.push({ ...this.todo });
    }
    localStorage.setItem('todos', JSON.stringify(this.todoList));
    this.todo = this.initodo;
  }

  editTodo(todo: Todo): void {
    this.todo = { ...todo };
  }

  // delTodo(id: number): void {
  //   this.todoList = this.todoList.filter(o => o.Id !== id);
  //   localStorage.setItem('todos', JSON.stringify(this.todoList));
  // }
  delTodo(id: number): void {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this Item?');
  
    // Proceed with deletion only if the user confirms
    if (isConfirmed) {
      this.todoList = this.todoList.filter(o => o.Id !== id);
      localStorage.setItem('todos', JSON.stringify(this.todoList));
    }
  }
  

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // this.todo.Image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
