import { Component, OnInit } from '@angular/core';
import { IMoview } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from "@angular/router";
import { AuthService } from "../../services/authentication/auth.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: false,
})
export class MoviePage implements OnInit {

  constructor(
    private movieService: MovieService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    // this.movies = this.movieService.movies;
    this.movieService.movies().subscribe(
      (data) => {
        this.movies = this.movieService.parseMovies(data);
      }
    );
  }

  jenistampilan = "table"
  isModalOpen = false;
  // selectedMovie: IMoview | null = null;
  selectedMovie:any;
  // selectedIndex: number = 0;

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

  // openModal(movie: IMoview, i: number) {
  //   this.selectedMovie = movie;
  //   this.selectedIndex = i;
  //   this.isModalOpen = true;
  // }
  openModal(movie: any) {
    this.selectedMovie = movie;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedMovie = null;
  }

  // deleteMovie(index: number) {
  //   if (confirm('Apakah Anda yakin ingin menghapus film ini?')) {
  //     this.movieService.movies.splice(index, 1);
  //   }
  // }

  deleteMovie(id: number) {
    if (confirm('Apakah Anda yakin ingin menghapus film ini?')) {
      this.movieService.deleteMovie(id).subscribe((response: any) => {
        if (response.result === 'success') {
          this.ngOnInit();
        }
        else {
          alert(response.message)
        }
      });
    }
  }

  // movies: IMoview[] = [];
  movies: any[] = [];
  index: number = 0;

}
