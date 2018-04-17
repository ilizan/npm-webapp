import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'z1-app',
  // template: `<h1>{{name}}</h1>`
  templateUrl: './z1.component.html',
})
export class Z1Component implements OnInit{
  name = 'Semlinker';
  address = {
    province: '福建',
    city: '厦门'
  }
  constructor() {
    
  }
  ngOnInit() {
    
  }
}
