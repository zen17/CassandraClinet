import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SigninComponent} from './components/signin/singin.component';
import {AdsComponent} from './components/ads/ads.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MyAdsComponent} from './components/my-ads/my-ads.component';
import {LoginComponent} from './components/login/login.component';
import {LikedAdsComponent} from './components/liked-ads/liked-ads.component';
import {PostAdsComponent} from './components/post-ads/post-ads.component';

const routes: Routes = [
  {
    path: '', component: AdsComponent
  },
  {
    path: 'my-ads', component: MyAdsComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'ads', component: AdsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sigin-in', component: SigninComponent
  },
  {
    path: 'liked-ads', component: LikedAdsComponent
  },
  {
    path: 'post-ads', component: PostAdsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
