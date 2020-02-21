import { Component, OnInit } from '@angular/core';
import { DataSerService } from '../data-ser.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
mess='';
  constructor(private data:DataSerService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(res=>{
      this.mess = res;
    })
  }

}
