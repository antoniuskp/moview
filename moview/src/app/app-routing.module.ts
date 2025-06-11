import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guestGuard } from "./guards/guest.guard";
import {roleGuard} from "./guards/role.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('./movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule),
  },
  {
    path: 'rate-movie/:id',
    loadChildren: () => import('./rate-movie/rate-movie.module').then( m => m.RateMoviePageModule),
  },
  {
    path: 'admin/movie',
    loadChildren: () => import('./admin/movie/movie.module').then( m => m.MoviePageModule),
    canActivate: [roleGuard],
    data: {
      'expectedRole': 'admin'
    },
  },
  {
    path: 'admin/add-movie',
    loadChildren: () => import('./admin/add-movie/add-movie.module').then( m => m.AddMoviePageModule),
    canActivate: [roleGuard],
    data: {
      'expectedRole': 'admin'
    },
  },
  {
    path: 'admin/edit-movie/:id',
    loadChildren: () => import('./admin/edit-movie/edit-movie.module').then( m => m.EditMoviePageModule),
    canActivate: [roleGuard],
    data: {
      'expectedRole': 'admin'
    },
  },
  {
    path: 'home/search',
    loadChildren: () => import('./search-movie/search-movie.module').then( m => m.SearchMoviePageModule),
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
