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

  openModal(movie: IMoview) {
    this.selectedMovie = movie;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedMovie = null;
  }


  // editMovie(index: number) {
  //   const movieToEdit = this.movies[index];
  //   console.log('Edit movie:', movieToEdit);
  // }
  
  // deleteMovie(index: number) {
  //   if (confirm('Yakin ingin menghapus film ini?')) {
  //     this.movies.splice(index, 1);
  //   }
  // }


  movies: IMoview[] = [];
  index: number = 0;



  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.movies;
  }

}
