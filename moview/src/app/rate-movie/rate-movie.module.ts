import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { IonicModule } from '@ionic/angular';
import { RateMoviePage } from './rate-movie.page'; 
import { StarRatingComponent } from '../components/star-rating/star-rating.component';
import { RateMoviePageRoutingModule } from './rate-movie-routing.module'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    IonicModule,
    RateMoviePageRoutingModule, 
    StarRatingComponent
  ],
  declarations: [RateMoviePage], 
})
export class RateMoviePageModule {}
