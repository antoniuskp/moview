import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  // movie: IMoview | undefined;
  movie:any={}
  isLoggedIn: boolean = false;
  // index: number = 0;
  id:number=0;
  showLogout = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn = !!this.authService.user();

    this.route.params.subscribe(params => {
      // this.index = +params['index'];
      // this.movie = this.movieService.movies[this.index];
      // console.log('Movie:', this.movie);
      this.id = params['id'];
      this.movieService.detailMovie(this.id).subscribe(
        (data) => {
          this.movie = this.movieService.parseDetailMovie(data);
        }
      );
    });
  }

  logout() {
    this.authService.logout();
  }

  toggleLogout() {
    this.showLogout = !this.showLogout;
  }

  isAuthenticated() {
    return this.authService.user() != null;
  }

  getUser() {
    return this.authService.user();
  }

  goLoginPage() {
    return this.router.navigate(['login']);
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
