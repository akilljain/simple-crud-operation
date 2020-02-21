import { Component, OnInit } from '@angular/core';
import { ReactserviceService } from './reactservice.service';
//import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reactemp } from './reactemp';


@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  addform:FormGroup;
  emplist:any ={}
  
  title= "Create Form";


  constructor(
    private serv:ReactserviceService, 
    private fb:FormBuilder
    ) { }

  ngOnInit() {
    this.addform = this.fb.group({
      name:['', Validators],
      email:['', Validators],
      phone:['', Validators]
    })
    this.getemp();
  }

  getemp(){
    this.serv.getEmp().subscribe((data:Reactemp)=>{
      this.emplist = data;
    })
  }


  addEmp(){
    debugger;
    //this.title = "Update";
    if(this.addform.value.id){
      this.serv.update(this.addform.value).subscribe(data=>{
        this.getemp();
      })
    }
    else{
      this.serv.createEmp(this.addform.value).subscribe(data=>{
        console.log(data);
        this.getemp();
      })
    }
  }


  getSingleId(id){
    this.serv.getEmpId(id).subscribe(data=>{
      this.addform = this.fb.group({
        id:data.id,
        name:data.name,
        email:data.email,
        phone:data.phone,
      })
    })
    this.title = "Update";
  }

  delete(id){
    this.serv.deleteEmp(id).subscribe(data =>{
      this.getemp();
    })
  }
}
