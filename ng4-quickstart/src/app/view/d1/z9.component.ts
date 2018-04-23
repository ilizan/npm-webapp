import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ZService} from "./zService";
@Component({
    selector: 'z9app',
    template: `
  <div>
     {{message}}
     <input #myInput type="text" [(ngModel)]="message">
     <button (click)="onClick($event, myInput.value)">点击</button>
     <button (click)="update.emit({text:message})">更新</button>
     
    </div>
  `,
})

export class Z9Component implements OnInit {
    @Input() message:string = 'Output 装饰器';
    @Output() update = new EventEmitter<{text: string}>();
    constructor() {

    }
    ngOnInit() {

    }
    onClick(event: any, val: any) {
        console.log(JSON.stringify(event) + "--" + val);
    }
}
