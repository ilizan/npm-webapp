import { Component } from '@angular/core';

@Component({
  selector: 'index-app',
  template: `<h1>{{name}}</h1>`
})
export class IndexComponent  { name = 'index'; }
