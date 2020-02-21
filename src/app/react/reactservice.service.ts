import { Injectable } from '@angular/core';
import { Reactemp } from './reactemp';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReactserviceService {

  api= 'http://localhost:3000/employees/';
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getEmp():Observable<Reactemp>{
    return this.http.get<Reactemp>(this.api);
  }

  getEmpId(id):Observable<Reactemp>{
    return this.http.get<Reactemp>(this.api + id);
  }


  createEmp(emp):Observable<Reactemp>{
    debugger
    return this.http.post<Reactemp>(this.api, JSON.stringify(emp), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  update(emp){
    debugger
    return this.http.put(this.api + emp.id, JSON.stringify(emp), this.httpOptions);
  }

  deleteEmp(id){
   return this.http.delete(this.api + id); 
  }

  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  
}
