import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyTweetsComponent } from './my-tweets/my-tweets.component';
import { MyMentionsComponent } from './my-mentions/my-mentions.component';

import { AuthGuardService } from './services/auth/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'login',
    component : LoginComponent 
  },
  {
    path:'register',
    component : RegistrationComponent
  },
  {
    path:'user/mytweets',
    component : MyTweetsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'user/mymentions',
    component : MyMentionsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'user/profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
