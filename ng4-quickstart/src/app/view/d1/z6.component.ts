import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)
interface Member {
  id: string;
  login: string;
  avatar_url: string;
}
@Component({
  selector: 'z6-app',
  templateUrl: './z6.component.html',
})

export class Z6Component implements OnInit {
  name = 'http模块';
  members: Member[];
  constructor(private http: Http) {

  }
  ngOnInit() {
    this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) // (4)
      .map(res => res.json()) // (5)
      .subscribe(data => {
        if (data) this.members = data; // (6)
      });

  }
}
