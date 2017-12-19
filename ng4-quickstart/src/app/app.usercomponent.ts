import { Component,OnInit } from '@angular/core';
import { EFBIG } from 'constants';

@Component({
  selector: 'user-app',
  template: `<h1>{{name}}</h1>`,
  // templateUrl: 'app/1.html',
})
export class UserComponent implements OnInit{ 
  name: string = 'userpage';
  
    constructor() {
      console.log('Constructor initialization');
      this.name = 'Semlinker';
    }
  
    ngOnInit() {
      console.log('ngOnInit hook has been called');
    }
 }
