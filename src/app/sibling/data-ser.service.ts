import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSerService {

  constructor() { }
  private messageSource = new BehaviorSubject('Default');
  currentMessage = this.messageSource.asObservable();

  changeNext(message){
    this.messageSource.next(message);
  }
}
