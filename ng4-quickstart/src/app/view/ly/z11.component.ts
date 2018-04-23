import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'z11-app',
  template: `
  <div>
    <h2>{{name}}</h2>
    id:{{id}}
    <div style="border:1px solid #999">
    <router-outlet></router-outlet>
    </div>
  </div>
  `,
})

export class Z11Component implements OnInit, OnDestroy{
  name = '路由';
  id:string;
  private sub: any;// 传递参数对象
  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit() {
    console.log(this.id)
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
