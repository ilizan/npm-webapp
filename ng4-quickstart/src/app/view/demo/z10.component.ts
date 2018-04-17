import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'z10-app',
    template: `
    <div>
    {{name}}
    <input #myInput type="text" [(ngModel)]="message">
    <button (click)="update.emit({text: message})">更新</button>
   </div>
  `,
})

export class Z10Component implements OnInit {
    @Input() name:string = 'Output 装饰器';
    @Output() update = new EventEmitter<{text: string}>();
    constructor() {

    }
    ngOnInit() {

    }
    onClick(event: any, val: any) {
        console.log(JSON.stringify(event) + "--" + val);
    }
}
