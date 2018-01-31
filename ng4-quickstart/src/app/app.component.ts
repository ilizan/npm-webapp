import { Component } from '@angular/core';

// @Component({//无路由写法
//   selector: 'my-app',
//   template: `
//   123
//   `,
//   // templateUrl: 'app/1.html',
// })

@Component({//路由写法
  selector: 'my-app',
  // template: ``,
  templateUrl: 'app/1.html',
})
export class AppComponent  { name = 'jquery'; }

