import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { IndexComponent }  from './app.indexcomponent';
import { UserComponent }  from './app.usercomponent';



// @NgModule({
//   imports:      [ BrowserModule,RouterModule ],
//   declarations: [ AppComponent,UserComponent ],
//   bootstrap:    [ AppComponent ]
// })

export const ROUTES: Routes = [
  {path:'',pathMatch:'full',redirectTo: 'index' },
  {path:'index',component:IndexComponent},
  {path:'user',component:UserComponent}
];
@NgModule({
  imports:[
    BrowserModule,HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent,IndexComponent,UserComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
