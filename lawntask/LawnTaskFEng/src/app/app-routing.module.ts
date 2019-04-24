import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'
import { UserLawnComponent } from './user-lawn/user-lawn.component'
import { LawnDetailComponent } from './lawn-detail/lawn-detail.component'
import { AuthGuardService } from 'src/app/services/auth-guard.service';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
  //  loadChildren: "../app/registration/registration.module#RegistrationModule"
    component:RegistrationComponent
  },
  {
    path:'lawns',
    //loadChildren: "../app/user-lawn/user-lawn.module#UserLawnModule",
    component: UserLawnComponent,
    canActivate:[AuthGuardService]
  },

  {
    path:'lawnDetail/:lawn_id',
    component: LawnDetailComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
