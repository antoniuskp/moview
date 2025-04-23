import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMoview } from '../interfaces/movie';
import { MovieService } from '../services/movie.service'; 
import { AuthService } from '../services/authentication/auth.service'; 

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone:false
})
export class MovieDetailPage implements OnInit {
  movie: IMoview | undefined;
  isLoggedIn: boolean = false;  
  index: number = 0;  

  constructor(private route: ActivatedRoute, private movieService: MovieService, private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.authService.user();

    this.route.params.subscribe(params => {
      this.index = +params['index']; 
      this.movie = this.movieService.movies[this.index];
      console.log('Movie:', this.movie);
    });
  }

  getAverageRating(movie: IMoview): number {
    if (!movie.reviews || movie.reviews.length === 0) {
      return 0;
    }

    let totalRating = 0;
    movie.reviews.forEach(review => {
      totalRating += review.rating;
    });

    return (totalRating / movie.reviews.length);
  }
}
