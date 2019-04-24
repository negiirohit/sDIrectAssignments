import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
//import { UserLawnComponent } from './user-lawn/user-lawn.component';
import { AddLawnComponent } from './add-lawn/add-lawn.component';
//Request Interceptor
import {AuthInterceptor} from './services/auth.interceptor';
//AutoCOmplete
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { LawnDetailComponent } from './lawn-detail/lawn-detail.component';

//ChartsModule
import { ChartsModule } from 'ng2-charts';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
import { LawnService } from 'src/app/services/lawn.service';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { UserLawnComponent } from 'src/app/user-lawn/user-lawn.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    UserLawnComponent,
    AddLawnComponent,
    LawnDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    ChartsModule
    ],
    providers: [  AuthGuardService,
      AuthService,
      LawnService,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [AddLawnComponent]

})
export class AppModule { }
