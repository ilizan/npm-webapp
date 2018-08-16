import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  list: any;
  constructor(private http: HttpClient) { }
  today = new Date();
  ngOnInit() {
    this.http.get('https://api.github.com/orgs/angular/members?page=1&per_page=5').subscribe(
      (data) => {
        console.log(data)
        this.list = data;
      })
    this.http.post('posturl',{name:"yunqi"}).subscribe(
      (data) =>{
        console.log(data)
      }
    )
  }

}


