var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                    mode: 'ios',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios'
                }, {
                    links: [
                        { component: HomePage, name: 'index', segment: 'index' },
                        { component: HomePage2, name: 'index2', segment: 'index2' },
                        { component: AboutPage, name: 'about', segment: 'about' },
                        { component: ContactPage, name: 'contact', segment: 'contact' },
                        { component: WelcomePage, name: 'welcome', segment: 'welcome' },
                        { component: TabsPage, name: 'tabs', segment: 'tabs' },
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
            providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map