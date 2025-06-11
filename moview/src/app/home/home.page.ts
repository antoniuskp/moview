import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AuthService } from "../services/authentication/auth.service";
import { Router } from "@angular/router";
import { animate, style, transition, trigger } from "@angular/animations";
import { IMoview } from "../interfaces/movie";
import { MovieService } from "../services/movie.service";

import Swiper from 'swiper';
import { IReview } from "../interfaces/review";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomePage {

  // movies: IMoview[] = []
  movies: any[] = []

  constructor(
    private authService: AuthService,
    private router: Router,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    // this.movies = this.movieService.movies
    //   .sort((a, b) => new Date(b.tanggalRilis).getTime() - new Date(a.tanggalRilis).getTime())
    //   .slice(0, 10);
    this.movieService.movies().subscribe(
      (data) => {
        this.movies = this.movieService.parseMovies(data);
        this.movies.sort((a, b) => new Date(b.tanggalRilis).getTime() - new Date(a.tanggalRilis).getTime()).slice(0, 10);
      }
    );
    
  }

  @ViewChildren('swiper')
  swiperRefs!: QueryList<ElementRef>;
  swiper!: Swiper;

  showLogout = false;

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
    const { reviews } = movie;
    if (reviews.length === 0) return 0;

    const totalRating = reviews
      .reduce((sum, review) => sum + review.rating, 0);

    return totalRating / reviews.length;
  }
}
