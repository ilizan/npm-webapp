import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userlist = [];
  flag = true;
  flagvalue = "切换";
  msg = "";
  fn(){
    this.title ="111";
  }

  isshow(){
    this.flag = !this.flag;
  }
  edit(item){
    this.msg = item.name;
  }
  addUser(){
    this.userlist.push({
      id:this.userlist.length+1,
      name:this.msg
    })
  }
  ngOnInit(){
    this.title = "s";
    // this.userlist = [{
    //   id:1,
    //   name:"名字1"
    // },{
    //   id:2,
    //   name:"名字2"
    // }]
  }
}
