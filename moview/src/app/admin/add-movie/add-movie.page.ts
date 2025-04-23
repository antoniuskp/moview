import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
  standalone:false,
})
export class AddMoviePage implements OnInit {

  new_poster=""
  new_judul=""
  new_genre=""
  new_tanggal: Date = new Date();
  new_sutradara=""
  new_sinopsis=""
  
  public alertButtons = ['OK']

  constructor(private movieService: MovieService, private router: Router) { }

  addmovie(){
    this.movieService.addMovie(this.new_poster, this.new_judul, this.new_genre, this.new_tanggal, this.new_sutradara, this.new_sinopsis);
    this.router.navigate(['/admin/movie']);
  }

  ngOnInit() {
  }

}
