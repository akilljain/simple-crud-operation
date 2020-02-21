import { Component, OnInit } from '@angular/core';
import { EmserviceService } from '../emservice.service';
import { Emp} from '../emp';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  empList:any =[];
  constructor(private service:EmserviceService) { }

  ngOnInit() {
    this.service.cureentmessage.subscribe(res =>{
      this.getemplist();
    })
  }


  getemplist(){
    this.service.getEmplist().subscribe(data=>{
      this.empList = data;
    })
  }

  chnageMessage(){
    this.service.nextMessage("update");
  }
}
