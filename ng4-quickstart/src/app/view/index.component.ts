import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index-app',
  // template: `<h1>{{name}}</h1>`
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  name = 'name';
  arr: any = {}
  valuearr: any = [];
  constructor() {
    this.name = 'name-constructor';
  }
  ngOnInit() {
    this.name = 'index初始化';
    for (let index = 0; index < 3; index++) {
      this.arr.push({
        ["key"+index]: "value"+index
      });
    }
    this.arr.push({
      ["key0"]: "value000"
    });
    console.log(this.arr)
  }
}
