import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z5-app',
  styles: [`
   input.ng-invalid {
       border: 1px solid red;
    }
   input.ng-valid {
       border: 1px solid green;
    }
    select.ng-invalid + label:after {
      content: '<-- 请选择版本!'
    }
  `
  ],
  templateUrl: './z5.component.html',
})

export class Z5Component implements OnInit {
  name = '表单模块';
  skills: any = [];

  constructor() {

  }
  addSkill(skill: string) {
    let skillStr = skill.trim();
    if (skillStr == "")
      return;
    if (this.skills.indexOf(skillStr) === -1) {
      this.skills.push(skillStr);
    }
  }
  ngOnInit() {

  }
  username = "6"
  onSubmit(value: any) {
    console.dir(value);
  }
  versions = ['1.x', '2.x', '3.x'];
  versions1 = ['','1.x', '2.x', '3.x'];
}
