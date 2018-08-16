import { Routes, RouterModule } from '@angular/router';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { FormComponent } from './form/form.component';
import { HttpComponent } from './http/http.component';
const routes: Routes = [
  {path:'',redirectTo: '/app2',pathMatch:'full' },
  {path:'app2',component:App2Component},
  {path:'app3',component:App3Component},
  {path:'form',component:FormComponent},
  {path:'http',component:HttpComponent},
  
];

export const MyRouteRoutes = RouterModule.forRoot(routes);

