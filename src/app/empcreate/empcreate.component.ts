import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent implements OnInit {
 employeeDetails={name:'', email:'', phone:''};
  constructor(private ser:ServiceService, private router:Router) { }

  ngOnInit() {
  }

add(){
  debugger
  this.ser.createEmp(this.employeeDetails).subscribe(data =>{
    this.router.navigate(['/list']);
  })
}


}
