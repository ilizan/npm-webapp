import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRouteRoutes } from './my-route.routing';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './form/user/user.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
// import { registerLocaleData } from '@angular/common';
// import zh from '@angular/common/locales/zh';
// registerLocaleData(zh);
// import en from '@angular/common/locales/en';
// registerLocaleData(en);

import { FormsModule } from '@angular/forms';//导入表单模块
import { HttpComponent } from './http/http.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FormComponent,
    UserComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    MyRouteRoutes,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
