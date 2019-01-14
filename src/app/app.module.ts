import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatOptionModule, MatInputModule,

} from '@angular/material';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { SigninComponent } from './components/signin/singin.component';
import { HttpClientModule } from '@angular/common/http';
import { AdsComponent } from './components/ads/ads.component';
import { AdComponent } from './components/ad/ad.component';
import {GoogleSignInComponent} from 'angular-google-signin';
import { ProfileComponent } from './components/profile/profile.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';
import {MatCardModule} from '@angular/material/card';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './components/login/login.component';
import { LikedAdsComponent } from './components/liked-ads/liked-ads.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { PostAdsComponent } from './components/post-ads/post-ads.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { SerachComponent } from './components/serach/serach.component';
import { MyAdComponent } from './components/my-ad/my-ad.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2204587472905307")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("103399071908-8u6vb66snq8thibdl20k6cihistsdenl.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdsComponent,
    AdComponent,
    GoogleSignInComponent,
    ProfileComponent,
    MyAdsComponent,
    AdDetailsComponent,
    LoginComponent,
    LikedAdsComponent,
    MainNavComponent,
    PostAdsComponent,
    SerachComponent,
    MyAdComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatInputModule,
    MatMenuModule

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
