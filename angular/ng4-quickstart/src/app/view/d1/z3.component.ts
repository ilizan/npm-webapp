import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z3-app',
  // template: `<z21-app></z21-app>`
  templateUrl: './z3.component.html',
})

export class Z3Component implements OnInit {
  name: string = '常用指令简介';
  showSkills: boolean = true;
  skills: any = [];
  constructor() {

  }
  ngOnInit() {
    this.skills = ['吃饭1', '上班1', '吃饭2', '上班2', '吃饭3', '上班3', '吃饭4', '上班4'];
  }
}
