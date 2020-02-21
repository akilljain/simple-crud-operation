import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  employeeData:any={};

  constructor(private ser:ServiceService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.ser.getEmpId(this.id).subscribe(data=>{
      this.employeeData =data;
    })
  }


  edit(){
    debugger;
    this.ser.UpEmp(this.id, this.employeeData).subscribe(data=>{
      this.router.navigate(['/list'])
    })
  }
}
