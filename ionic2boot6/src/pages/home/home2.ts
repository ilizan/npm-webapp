import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {HomePage} from "./home";

@Component({
  templateUrl: 'home2.html'
})
export class HomePage2 {
  index = HomePage;
  constructor(public navCtrl: NavController) {

  }

}
