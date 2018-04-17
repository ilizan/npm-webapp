import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';//导入http模块
import { Routes,RouterModule } from '@angular/router';//不添加路由则注释该行
import { AppComponent }  from './app.component';
import { IndexComponent }  from './view/index.component';
import { UserComponent }  from './view/user/user.component';
import { Z1Component }  from './view/demo/z1.component';
import { Z2Component }  from './view/demo/z2.component';
import { Z21Component }  from './view/demo/z21.component';
import { Z3Component }  from './view/demo/z3.component';
import { Z4Component }  from './view/demo/z4.component';
import { Z5Component }  from './view/demo/z5.component';
import { FormsModule } from '@angular/forms';//导入表单模块
import { Z6Component }  from './view/demo/z6.component';
import { Z7Component }  from './view/demo/z7.component';
import { ZService }  from './view/demo/zService';//导入服务
import { Z8Component }  from './view/demo/z8.component';
import { Z81Component }  from './view/demo/z81.component';
import { Z9Component }  from './view/demo/z9.component';
import { Z91Component }  from './view/demo/z91.component';

import { Z10Component }  from './view/demo/z10.component';

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
  {path:'z10',component:Z10Component},//表单,双向绑定
  
  
];
@NgModule({
  imports:[
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent,
    IndexComponent,
    UserComponent,
    Z1Component,
    Z2Component,
    Z21Component,
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
    
  ],
  providers: [ZService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
