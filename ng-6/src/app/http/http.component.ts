import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  list :any;
  today = new Date();
  load:boolean=true;
  constructor(private http: HttpClient,public router:Router) { }

  ngOnInit() {
    this.http.get('https://api.github.com/orgs/angular/members?page=1&per_page=5').subscribe(
      (data)=>{
        console.log(data)
        this.list = data;
        this.load = false;
        
      }
    )
    this.http.post("posturl",{'id':111}).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }
  goUrl(){
    this.router.navigate(['/app3'])
  }
}
