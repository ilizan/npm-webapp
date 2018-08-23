import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'z2zj-app',
      template: `
      <h5>我是组件子</h5>
        <h2>大家好，我是{{name}}</h2>
        <p>我来自
            <strong>{{address.province}}</strong>省,
            <strong>{{address.city}}</strong>市
            <br/> {{address|json}}//Angular 内置的 json管道
        </p>
      `
    // templateUrl: './z21.component.html',
})
export class Z2zujianComponent implements OnInit {
    name: string;
    address: any;
    
    constructor() {
        this.name = 'Semlinker';
        this.address = {
            province: '福建',
            city: '厦门'
        }
    }
    ngOnInit() {

    }
}
