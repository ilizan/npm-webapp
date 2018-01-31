import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data:any;
  username:"";
  password:"";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('id');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('页面加载完 LoginPage');
  }
  ionViewWillEnter(){//我要进来了
    console.log('我要进来了 LoginPage');
  }
  // ToUrlHome = function(){
  //   console.log("url");
  //   this.navCtrl.push(HomePage);
  // }
  login = function(){
    console.log(this.username);
    console.log(this.password);
  }
  goback = function(){//返回
    this.navCtrl.pop();
  }
}
