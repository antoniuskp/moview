import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarRatingComponent } from '../components/star-rating/star-rating.component';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';

import { MovieDetailPage } from './movie-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    IonicModule,
    MovieDetailPageRoutingModule,
    StarRatingComponent
  ],
  declarations: [MovieDetailPage],
})
export class MovieDetailPageModule {}
