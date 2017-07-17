import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { HomePage2 } from '../pages/home/home2';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';

import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomePage2,
    WelcomePage
  ],
  imports: [
    //IonicModule.forRoot(MyApp)
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',//Android、iOS统一显示iOS的样式
      iconMode: 'ios',//Android、iOS统一显示iOS的样式
      modalEnter: 'modal-slide-in',//模态滑动
      modalLeave: 'modal-slide-out',//模态滑出
      tabsPlacement: 'bottom',
      pageTransition: 'ios'
    },{
      links: [
        {component: HomePage, name: 'index', segment: 'index'},
        {component: HomePage2, name: 'index2', segment: 'index2'},
        {component: AboutPage, name: 'about', segment: 'about'},
        {component: ContactPage, name: 'contact', segment: 'contact'},
        {component: WelcomePage, name: 'welcome', segment: 'welcome'},
        {component: TabsPage, name: 'tabs', segment: 'tabs'},
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomePage2,
    WelcomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
