import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
//   templateUrl: 'app/1.html',
})
export class UserComponent  { name = 'userpage'; }
