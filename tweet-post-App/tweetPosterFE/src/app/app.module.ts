import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


//Components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MyMentionsComponent } from './my-mentions/my-mentions.component';
import { MyTweetsComponent } from './my-tweets/my-tweets.component';
//services
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
//interceptors
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Mention
import { MentionModule } from 'angular-mentions';
import { ProfileComponent } from './profile/profile.component';

//add pipes
import { LinkHandlePipe } from './pipes/link-handle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MyMentionsComponent,
    MyTweetsComponent,
    HeaderComponent,
    ProfileComponent,
    LinkHandlePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MentionModule
  ],
  providers: [AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
