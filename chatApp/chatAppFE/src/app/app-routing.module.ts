import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';

import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { UserListComponent } from 'src/app/user-list/user-list.component';
import { ChatRoomComponent } from 'src/app/chat-room/chat-room.component';

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
    path:'user/userlist',
    component : UserListComponent,
    canActivate: [AuthGuardService]
    
  },
  {
    path:'user/chatroom',
    component : ChatRoomComponent,
    canActivate: [AuthGuardService]
    
  },{
    path:'',
    component : UserListComponent,
    canActivate: [AuthGuardService]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
