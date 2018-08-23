import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';//导入http模块
import { Routes,RouterModule } from '@angular/router';//不添加路由则注释该行
import { AppComponent }  from './app.component';
import { IndexComponent }  from './view/index.component';
import { UserComponent }  from './view/user/user.component';
import { Z1Component }  from './view/d1/z1.component';
import { Z2Component }  from './view/d1/z2.component';
import { Z2zujianComponent }  from './view/d1/Z2zujian.component';
import { Z3Component }  from './view/d1/z3.component';
import { Z4Component }  from './view/d1/z4.component';
import { Z5Component }  from './view/d1/z5.component';
import { FormsModule } from '@angular/forms';//导入表单模块
import { Z6Component }  from './view/d1/z6.component';
import { Z7Component }  from './view/d1/z7.component';
import { ZService }  from './view/d1/zService';//导入服务
import { Z8Component }  from './view/d1/z8.component';
import { Z81Component }  from './view/d1/z81.component';
import { Z9Component }  from './view/d1/z9.component';
import { Z91Component }  from './view/d1/z91.component';

import { Z10Component }  from './view/zl/z10.component';
import { GreetDirective }  from './view/zl/greetDirective';

import { Z11Component }  from './view/ly/z11.component';
import { Z11UserComponent }  from './view/ly/z11user.component';
import { Z12Component }  from './view/gd/z12.component';
// import { WelcomePipe }  from './view/gd/welcomePipe';
import { AllPipes }  from './view/gd/all-pipes';

import {Zsq1Component} from './view/zsq/zsq1'
import {Zsq1DeteilComponent} from './view/zsq/zsq1-deteil/zsq1-deteil'

// @NgModule({//不添加路由写法
//   imports:      [ BrowserModule],
//   declarations: [ AppComponent ],
//   bootstrap:    [ AppComponent ]
// })

export const ROUTES: Routes = [
  {path:'',pathMatch:'full',redirectTo: 'index' },
  {path:'index',component:IndexComponent},
  {path:'user',component:UserComponent},
  {path:'z1',component:Z1Component},//插值表达式
  {path:'z2',component:Z2Component},//自定义组件
  {path:'z3',component:Z3Component},//常用指令简介
  {path:'z4',component:Z4Component},//事件绑定
  {path:'z5',component:Z5Component},//表单模块
  {path:'z6',component:Z6Component},//http模块
  {path:'z7',component:Z7Component},//注入服务
  {path:'z81',component:Z81Component},//input装饰器
  {path:'z91',component:Z91Component},//表单,双向绑定
  {path:'z10',component:Z10Component},//指令
  {path:'z11/:id',component:Z11Component},//路由
  {path:'z11r',component:Z11Component,//子(嵌套)路由
    children:[
      {path: 'user',component:Z11UserComponent}
    ]
  },
  {path:'z12',component:Z12Component},//管道/自定义管道
  {path:'zsq1',component:Zsq1Component},//装饰器input
  
  
];
@NgModule({
  imports:[
    BrowserModule,HttpModule,FormsModule,
    AllPipes,//自定义多个管道
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent,
    IndexComponent,
    UserComponent,
    Z1Component,
    Z2Component,
    Z2zujianComponent,
    Z3Component,
    Z4Component,
    Z5Component,
    Z6Component,
    Z7Component,
    Z8Component,
    Z81Component,
    Z9Component,
    Z91Component,
    Z10Component,
    GreetDirective,
    Z11Component,
    Z11UserComponent,
    Z12Component,
    // WelcomePipe,//管道
    Zsq1Component,
    Zsq1DeteilComponent
    
  ],
  providers: [ZService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
