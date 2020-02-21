import { Component, OnInit } from '@angular/core';
import { DataSerService } from '../data-ser.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
mess='';
  constructor(private data:DataSerService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(res =>
      this.mess = res
  )
  }
  messageChange(){
    this.data.changeNext("AKhil Jain");
  }

}
