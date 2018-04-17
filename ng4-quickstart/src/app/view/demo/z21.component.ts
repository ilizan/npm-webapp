import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'z21-app',
    //   template: `<h1>{{name}}</h1>`
    templateUrl: './z21.component.html',
})
export class Z21Component implements OnInit {
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
