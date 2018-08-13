import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
  {path:'',redirectTo: '/index',pathMatch:'full' },
  {path:'index',component:IndexComponent},
  // {path:'app',component:AppComponent},
  {path:'form',component:FormComponent},
  {path:'http',component:HttpComponent},
  

];

export const MyRouteRoutes = RouterModule.forRoot(routes);
