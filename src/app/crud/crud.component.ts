import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { OnInit  } from '@angular/core';
import { Crud } from '../model';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
  crudList: Crud[] = [];
  crud: Crud = this.inicrud;
  searchTerm: string = '';

  get inicrud(): Crud {
    return {
      Title: '',
      Id: null,
      Price:'',
      Image: ''
    };
  }
  constructor(private titleService: Title) { }

  ngOnInit() {
    const savedCrud = localStorage.getItem('cruds');
    if (savedCrud) {
      this.crudList = JSON.parse(savedCrud);
      this.titleService.setTitle('CRUD');
    }
  }

  addCrud(): void {
    if (this.crud.Id) {
      this.crudList = this.crudList.map(o => {
        if (o.Id === this.crud.Id) {
          return { ...this.crud };
        }
        return o;
      });
    } else {
      this.crud.Id = Date.now();
      this.crudList.push({ ...this.crud });
    }
    localStorage.setItem('cruds', JSON.stringify(this.crudList));
    this.crud = this.inicrud;
  }

  editCrud(crud: Crud): void {
    this.crud = { ...crud };
  }

  // delcrud(id: number): void {
  //   this.crudList = this.crudList.filter(o => o.Id !== id);
  //   localStorage.setItem('cruds', JSON.stringify(this.crudList));
  // }
  delCrud(id: number): void {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this Item?');
  
    // Proceed with deletion only if the user confirms
    if (isConfirmed) {
      this.crudList = this.crudList.filter(o => o.Id !== id);
      localStorage.setItem('cruds', JSON.stringify(this.crudList));
    }
  }
  

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.crud.Image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
