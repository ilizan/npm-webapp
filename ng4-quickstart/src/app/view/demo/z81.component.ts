import { Component } from '@angular/core';
import {ZService} from "./zService";
@Component({
    selector: 'z81-app',
    template: `
    <h3>{{name}}</h3>
    <z8app *ngFor="let message of zService.messages;" [message]="message">
    </z8app>
`,
})

export class Z81Component {
    name = 'input装饰器';
    constructor(private zService:ZService) {

    }
}
