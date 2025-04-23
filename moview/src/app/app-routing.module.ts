import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guestGuard } from "./guards/guest.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'movie-detail/:index',
    loadChildren: () => import('./movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule)
  },
  {
    path: 'rate-movie/:index',
    loadChildren: () => import('./rate-movie/rate-movie.module').then( m => m.RateMoviePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
