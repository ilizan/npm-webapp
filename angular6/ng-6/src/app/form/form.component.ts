import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  userInfo= {
    username:'',
    sex:''
  };
  userList = [];
  sexList = ['男','女']
  ngOnInit() {
  }
  addBtn(){
    var userInfo =this.userInfo
    this.userList.push({
      'id':this.userList.length+1,
      'username':userInfo.username,
      'sex':userInfo.sex
    });
  }
}
