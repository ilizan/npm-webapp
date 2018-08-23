import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-attend',
    template: `<div>{{this.value}}
  <p><input type="text" [(ngModel)]="this.data">{{this.data}}</p>
  
  </div><button type="button" (click)="btns()">传给父层</button>`
    //   templateUrl: './zsq1.component.html',
})
export class Zsq1DeteilComponent implements OnInit {
    @Input() value: string;//接收到父层值

    data: string;//定义

    @Output() outPutSplitData: EventEmitter<any> = new EventEmitter();//子传父
    btns() {
        this.outPutSplitData.emit(this.data);
    }
    constructor() {

    }
    ngOnInit() {
    }
}
