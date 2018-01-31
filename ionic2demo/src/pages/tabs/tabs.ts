import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import {Tabs} from 'ionic-angular';
// import {Injectable, ViewChild} from '@angular/core';
import {ViewChild} from '@angular/core';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef: Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  constructor() {

  }
  ionViewDidEnter() {
    this.tabRef.select(0);
  }
}
