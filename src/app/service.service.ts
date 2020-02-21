import { Injectable } from '@angular/core';
import { emp } from '../app/emp';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = 'http://localhost:3000/employees/';
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


getEmp():Observable<emp>{
return this.http.get<emp>(this.api)
.pipe(
  retry(1),
  catchError(this.handleError)
)
}

getEmpId(id):Observable<emp>{
  return this.http.get<emp>(this.api + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

createEmp(emp):Observable<emp>{
  return this.http.post<emp>(this.api, JSON.stringify(emp), this.httpOptions);
}

UpEmp(id, ememplip){
return this.http.put(this.api + id, JSON.stringify(ememplip), this.httpOptions)
}

delEmp(id){
  return this.http.delete<emp>(this.api + id, this.httpOptions);
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


