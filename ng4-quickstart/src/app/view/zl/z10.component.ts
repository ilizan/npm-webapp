import { Component, TemplateRef,
ViewContainerRef,//创建内嵌视图
ViewChild//获取视图中定义的模板元素
,AfterViewInit
 } from '@angular/core';

@Component({
    selector: 'z10-app',
    template: `
    <h2>{{name}}</h2>
    <h2 [greet]="'Hello, Semlinker!'" author="属性">Hello, Angular</h2>
    <ng-template #tpl>
        你好，xxx。
    </ng-template>
    <ng-template #tpl1>
        你好，xxx1。
    </ng-template>
    <ng-template #tpl2>
        你好，xxx2。
    </ng-template>
    <div [ngTemplateOutlet]="tpl1">111</div>
    <div [ngTemplateOutlet]="tpl2">222</div>
    <br/>

    
    <ng-template #stpl let-message="message">
      <p>{{message}}</p>
    </ng-template>
    <ng-template #atpl let-msg="message">
      <p>{{msg}}</p>
    </ng-template>
    <ng-template #otpl let-msg>
      <p>{{msg}}</p>
    </ng-template>
    <div [ngTemplateOutlet]="atpl"
      [ngOutletContext]="context">
    </div>
    <div [ngTemplateOutlet]="stpl"
      [ngOutletContext]="context">
    </div>
    <div [ngTemplateOutlet]="otpl"
      [ngOutletContext]="context">
    </div>
  `,
})

export class Z10Component implements AfterViewInit {
    context = { message: 'Hello ngOutletContext!', 
    $implicit: 'Hello, Semlinker!' };
    name = "指令";
    @ViewChild('tpl')
    tplRef: TemplateRef<any>
    constructor(private vcRef: ViewContainerRef) {

    }
    ngAfterViewInit(){
        this.vcRef.createEmbeddedView(this.tplRef)
    }
}
