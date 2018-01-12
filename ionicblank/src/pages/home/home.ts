import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {//demo实例教程：https://www.jianshu.com/p/ff3237a3e7dd
  data: any = [1, 2, 3, 4, 5, 6];
  data2: any = [
    { name: '托尼·史塔克', birthYear: 1970, gender: 1, description: '钢铁侠' },
    { name: '史蒂夫·罗杰斯', birthYear: 1920, gender: 1, description: '美国队长' },
    { name: '娜塔莎罗·曼诺夫', birthYear: 1928, gender: 0, description: '黑寡妇' },
    { name: '索尔', birthYear: -5555, gender: 1, description: '雷神' },
    { name: '克林顿·巴顿', birthYear: 1974, gender: 1, description: '鹰眼' },
    { name: '布鲁斯·班纳', birthYear: 1975, gender: 1, description: '绿巨人浩克' }
  ];

  constructor(public navCtrl: NavController) {
    console.log(1)
  }
  ionViewDidLoad() {//页面加载完触发
    console.log('页面加载完 HomePage');
  }
  ionViewWillEnter() {//我要进来了
    console.log('我要进来了 HomePage');
  }
  ionViewDidEnter() {
    // setInterval(()=>{
    //     this.data.push(this.data.length + 1);
    // },500)
  }
  ToUrlC = function () {
    this.navCtrl.push(LoginPage, {
      id: 1
    })
  }
}
