import { Component,OnInit } from '@angular/core';
import { ZService }  from './zService';//导入服务
interface Member {
    id: string;
    login: string;
    avatar_url: string;
  }
@Component({
  selector: 'z7-app',
  templateUrl: './z7.component.html',
})

export class Z7Component implements OnInit{
  name = '注入服务-使用ZService服务';
  members: Member[]
//   constructor() { }
  constructor(private zService:ZService) { }
  ngOnInit() {
    this.zService.getList()
        .subscribe(data => {
            if (data) this.members = data;
        });
  }
    // ngOnInit() {
    // }
}
