import {
Directive,//指令
HostBinding,//属性绑定
Input,//输入属性
ElementRef,//angular操作dom
HostListener//相应用户操作,click
,Attribute//获取指令宿主元素上的自定义属性,类似jquery attr

} from '@angular/core';

@Directive({
    selector: '[greet]'
})
export class GreetDirective {
  @Input() greet: string;
  
  // @HostBinding() innerText = 'Hello, 自定义指令!';
  @HostBinding() get innerText(){
    return this.greet;
  };
  //写法一
  // constructor(el:ElementRef){
  //   el.nativeElement.style.backgroundColor='#ccc';
  //   el.nativeElement.style.color='#000';
  // }
  //写法二
  private el:HTMLElement;
  private au:string;
  constructor(el:ElementRef,@Attribute('author') author: string){
    this.el = el.nativeElement;
    this.el.style.backgroundColor='#ccc';
    this.el.style.color='#000';
    
    this.au = author;
  }
  @HostListener('click',['$event'])
  onClick(event:any){
    this.el.style.color='red';
    this.greet = "text";
    console.log(this.au)
  }
  
}