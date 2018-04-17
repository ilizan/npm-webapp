import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'index-app',
  // template: `<h1>{{name}}</h1>`
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  name = 'name';
  constructor() {
    this.name = 'name-constructor';
  }
  ngOnInit() {
    this.name = 'index初始化';
  }
}
