import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'z8app',
    template: `
    <div>
        {{message}}
        <input #myInput type="text" (keydown.enter)="onEnter($event, myInput.value)">
        <button (click)="onClick($event, myInput.value)">点击</button>
    </div>`,
})

export class Z8Component implements OnInit {
    // name = 'input装饰器';
    @Input() message: string;
    constructor() {

    }
    ngOnInit() {

    }
    onEnter(event:any,val:any){
        console.log(JSON.stringify(event)+"--"+val);
    }
    onClick(event:any,val:any){
        console.log(JSON.stringify(event)+"--"+val);
    }
}
