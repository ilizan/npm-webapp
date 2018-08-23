import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'z12-app',
  template: `<div>
    <h3>{{name}}</h3>
    <h4>内建管道</h4>
    <div>
      <p ngNonBindable>{{ 'Angular' | uppercase }}</p>
      <p>{{ 'Angular' | uppercase }}</p>
    </div>
    <div>
      <p ngNonBindable>{{ 'Angular' | lowercase }}</p>
      <p>{{ 'Angular' | lowercase }}</p>
    </div>
    <div>
      <p ngNonBindable>{{ 3.14159265 | number: '1.4-4' }}</p>
      <p>{{ 3.14159265 | number: '1.4-4' }}</p>
    </div>
    <div>
      <p ngNonBindable>{{ today | date: 'shortTime' }}</p>
      <p>{{ today | date: 'shortTime' }}</p>
    </div>
    <div>
      <p ngNonBindable>{{ { name: 'semlinker' } | json }}</p>
      <p>{{ { name: 'semlinker' } | json }}</p>
    </div>
    <div>
      <p ngNonBindable>{{ 'semlinker' | slice:0:3 }}</p>
      <p>{{ 'semlinker' | slice:0:3 }}</p>
    </div>
    <div>
      <p ngNonBindable>{{ 'semlinker' | slice:0:3 | uppercase }}</p>
      <p>{{ 'semlinker' | slice:0:3 | uppercase }}</p>
    </div>
    <h4>自定义管道</h4>
    <div>
        <p ngNonBindable>{{ 'semlinker' | welcome }}</p>
        <p>{{ 'semlinker' | welcome }}</p> <!-- Output: Welcome to semlinker -->
    </div>

  </div>`
})

export class Z12Component implements OnInit{
  name = '管道/自定义管道';
  today = new Date();
  constructor() {
    
  }
  ngOnInit() {
    
  }
}
