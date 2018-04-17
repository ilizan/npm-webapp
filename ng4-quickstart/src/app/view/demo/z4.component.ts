import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'z4-app',
  templateUrl: './z4.component.html',
})

export class Z4Component implements OnInit{
  name = '事件绑定';
  flag:boolean = false;
  constructor() {
    
  }
  click1(){
      alert('点我干啥？')
  }
  toggles(){
      this.flag = !this.flag;
  }
  ngOnInit() {
    
  }
}
