import { Component, OnInit, Input} from '@angular/core';
import { EmserviceService } from '../emservice.service';
import {Emp} from '../emp';
@Component({
  selector: 'app-emlist',
  templateUrl: './emlist.component.html',
  styleUrls: ['./emlist.component.css']
})
export class EmlistComponent implements OnInit {

  @Input() empListData:Emp[];
  constructor(private service:EmserviceService) { }

  ngOnInit() {
  }

  sendEmployeeDetail(id:number){
    this.service.sendemp(id);
  }

}
