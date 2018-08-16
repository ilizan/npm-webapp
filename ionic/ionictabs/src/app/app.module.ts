import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',//Android、iOS统一显示iOS的样式
      iconMode: 'ios',//Android、iOS统一显示iOS的样式
      modalEnter: 'modal-slide-in',//模态滑动
      modalLeave: 'modal-slide-out',//模态滑出
      tabsPlacement: 'bottom',
      pageTransition: 'ios'
    }, {
        links: [
          { component: WelcomePage, name: 'welcome', segment: 'welcome' },
          { component: TabsPage, name: 'Tabs', segment: 'tabs' },
          { component: HomePage, name: 'Index', segment: 'index' },
          { component: AboutPage, name: 'About', segment: 'about' },
          { component: ContactPage, name: 'Contact', segment: 'contact' }
        ]
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
