import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userInfo = {
    id: '',
    name: '',
    sex: ''
  }
  userList = [];
  constructor() { }

  ngOnInit() {

  }
  add() {
    console.log(1)
    this.userList.push({
      id:this.userList.length+1,
      name:this.userInfo.name,
      sex:this.userInfo.sex
    })
  }
}
