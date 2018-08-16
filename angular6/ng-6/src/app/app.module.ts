import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRouteRoutes } from './my-route.routing';
import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { FormsModule } from '@angular/forms';//导入表单模块
import { FormComponent } from './form/form.component';
import { UserComponent } from './form/user/user.component';
import { HttpComponent } from './http/http.component';


import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
@NgModule({
    declarations: [
        AppComponent,
        App2Component,
        App3Component,
        FormComponent,
        UserComponent,
        HttpComponent
    ],
    imports: [
        BrowserModule,
        MyRouteRoutes,
        FormsModule,
        HttpClientModule,
        /** 导入 ng-zorro-antd 模块 **/
        NgZorroAntdModule
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
