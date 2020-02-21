import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Emp } from '../comp/emp';




@Injectable({
  providedIn: 'root'
})
export class EmserviceService {
  baseurl ="http://localhost:3000/employees/";
  private empdetail = new BehaviorSubject(null);


  constructor(private http:HttpClient) { }

  getEmplist(){
    return this.http.get(this.baseurl);
  }

  sendemp(id){
    let data = this.http.get<Emp>(this.baseurl + id);
    this.empdetail.next(data);
  }

  getempdet(){
    return this.empdetail.asObservable();
  }

  cureentmessage =  this.empdetail.asObservable();

  nextMessage(message){
    this.empdetail.next(message);
  }
}
