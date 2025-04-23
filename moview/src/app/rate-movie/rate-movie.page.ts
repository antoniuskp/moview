import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMoview } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-rate-movie',
  templateUrl: './rate-movie.page.html',
  styleUrls: ['./rate-movie.page.scss'],
  standalone: false
})

export class RateMoviePage implements OnInit {
  rating = 5;
  review = '';
  index = 0;
  movie: IMoview | undefined;
  alertButtons = ['OK'];
  currentUser: IUser | null = null;
  username: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = +params['index'];
      this.movie = this.movieService.movies[this.index];
      console.log(this.index);
    });
    this.currentUser = this.authService.user();
  }

  submitReview() {
    const newReview = {
      username: this.currentUser?.username || ' ',
      rating: this.rating,
      review: this.review,
      date: new Date()
    };
    this.movieService.addReview(this.index, newReview);
    this.router.navigate(['/movie-detail', this.index]);
  }
}

