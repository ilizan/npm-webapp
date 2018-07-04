import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'zsq1-app',
  template: `<h1>{{name}}{{sdata}}</h1>
  <p><input type="text" [(ngModel)]="this.value">
  <div style='border:1px solid #ccc'>
  子层
  <add-attend [value]='value' (outPutSplitData)="getChildEvent($event)"></add-attend>
  子层
  </div>`
//   templateUrl: './zsq1.component.html',
})
export class Zsq1Component implements OnInit{
  name = 'name1';
  value = '';
  sdata = '';
  constructor() {
    
  }
  ngOnInit() {
    console.log();
  }
  getChildEvent(data:string){
    console.log(data)
    this.sdata = data;
  }
}
