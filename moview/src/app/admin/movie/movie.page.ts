import { Component, OnInit } from '@angular/core';
import { IMoview } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: false,
})
export class MoviePage implements OnInit {

  jenistampilan = "table"
  isModalOpen = false;
  selectedMovie: IMoview | null = null;
  selectedIndex:number=0;

  openModal(movie: IMoview, i:number) {
    this.selectedMovie = movie;
    this.selectedIndex = i;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedMovie = null;
    this.selectedIndex = 0;
  }
  
  deleteMovie(index: number) {
    if (confirm('Apakah Anda yakin ingin menghapus film ini?')) {
      this.movieService.movies.splice(index, 1); 
    }
  }

  movies: IMoview[] = [];
  index: number = 0;



  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.movies;
  }

}
