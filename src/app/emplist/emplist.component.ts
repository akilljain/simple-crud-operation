import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
emplist:any;
  constructor(private ser:ServiceService) { }

  ngOnInit() {
    this.loademp();
  }

  loademp(){
    this.ser.getEmp().subscribe(data=>{
      this.emplist =data;
    })
  }


  delete(id){
    this.ser.delEmp(id).subscribe(data=>{
      this.loademp()
    })
  }

}
