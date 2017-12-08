import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { UserComponent }  from './app.usercomponent';



// @NgModule({
//   imports:      [ BrowserModule,RouterModule ],
//   declarations: [ AppComponent,UserComponent ],
//   bootstrap:    [ AppComponent ]
// })

@NgModule({
  imports:[
    BrowserModule,
    // RouterModule.for
  ]
})

export class AppModule { }
