import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // private dataSource = new BehaviorSubject<any>(this.dataSource);
  // currentData = this.dataSource.asObservable();


  private itemsSource = new BehaviorSubject<number>(0);
  currentItems = this.itemsSource.asObservable();

  private totalSource = new BehaviorSubject<number>(0);
  currentTotal = this.totalSource.asObservable();


  constructor() { }

  // updateData(data: any) {
  //   this.dataSource.next(data);
  // }

  updateItems(items: number) {
    this.itemsSource.next(items);
  }

  updateTotal(totalItems: number) {
    this.totalSource.next(totalItems);
  }
}
