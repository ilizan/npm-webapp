import { Component } from '@angular/core';
import {ZService} from "./zService";
@Component({
    selector: 'z91-app',
    template: `
    <h3>{{name}}</h3>
    <z9app *ngFor="let message of zService.messages;" [message]="message">
    </z9app>
`,
})

export class Z91Component {
    name = 'input装饰器';
    constructor(private zService:ZService) {

    }
}
