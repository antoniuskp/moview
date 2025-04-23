import { Component, OnInit } from '@angular/core';
import { IActor } from '../interfaces/actor';
import { MovieService } from '../services/movie.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.page.html',
  styleUrls: ['./search-movie.page.scss'],
  standalone: false
})
export class SearchMoviePage implements OnInit {

  searchCriteria = {
    title: '',
    genre: '',
    cast: ''
  };

  movies: any[] = [];
  actor: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.movies
  }

  searchMovies() {
    this.movies = this.movieService.movies.filter(movie =>
      (!this.searchCriteria.title || movie.judul.toLowerCase().includes(this.searchCriteria.title.toLowerCase())) &&
      (!this.searchCriteria.genre || movie.genre.toLowerCase().includes(this.searchCriteria.genre.toLowerCase())) &&
      (!this.searchCriteria.cast || movie.actors.some(actor =>
        actor.name.toLowerCase().includes(this.searchCriteria.cast.toLowerCase())))
    );
  }
  
}
