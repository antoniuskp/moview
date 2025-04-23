import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateMoviePage } from './rate-movie.page';

const routes: Routes = [
  {
    path: '',
    component: RateMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateMoviePageRoutingModule {}
