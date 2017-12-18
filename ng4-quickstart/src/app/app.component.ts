import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <a routerLink="/">首页</a>
  <a routerLink="/user">用户</a>
  <router-outlet></router-outlet>
  `,
  // templateUrl: 'app/1.html',
})
export class AppComponent  { name = 'jquery'; }

