import { Component,OnInit } from '@angular/core';
import { EFBIG } from 'constants';

@Component({
  selector: 'user-app',
  template: `<p>{{name}}</p>`,
  // templateUrl: 'app/1.html',
})
export class UserComponent implements OnInit{ 
  name: string = 'userpage';
  
    constructor() {
      this.name = 'Semlinker';
    }
  
    ngOnInit() {
      this.name = '用户页面初始化...';
    }
 }
