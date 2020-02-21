import { Component, OnInit } from '@angular/core';
import { EmserviceService } from '../emservice.service';
import { Emp} from '../emp';

@Component({
  selector: 'app-emdetails',
  templateUrl: './emdetails.component.html',
  styleUrls: ['./emdetails.component.css']
})
export class EmdetailsComponent implements OnInit {
  
  employeeDetail: Emp; 
  constructor(private service:EmserviceService) { }

  ngOnInit() {
   this.abc();
  }

  abc(){
    debugger;
    this.service.getempdet().subscribe(data=>{
      this.employeeDetail = data;
    })
  }

}
