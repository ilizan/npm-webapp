import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  constructor(public navCtrl: NavController) {

  }
  ToUrl = function(){
    console.log("url");
    this.navCtrl.push(TabsPage);
  }
}
