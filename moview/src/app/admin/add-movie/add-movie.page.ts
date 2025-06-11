import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
  standalone: false,
})
export class AddMoviePage implements OnInit {

  new_poster = ""
  new_judul = ""
  new_genre = ""
  new_tanggal = "";
  new_sutradara = ""
  new_sinopsis = ""
  new_actors: Array<{ name: string, role: string }> = [];
  new_actor_name = '';
  new_actor_role = '';

  public alertButtons = ['OK']

  constructor(private movieService: MovieService, private router: Router) { }

  addActor() {
    if (this.new_actor_name && this.new_actor_role) {
      this.new_actors.push({ name: this.new_actor_name, role: this.new_actor_role });
      this.new_actor_name = '';
      this.new_actor_role = '';
    }
  }
  removeActor(index: number) {
    this.new_actors.splice(index, 1);
  }

  addmovie() {
    const tanggal = new Date(this.new_tanggal).toISOString().split('T')[0];
    console.log(tanggal);
    this.movieService.addMovie(this.new_poster,
      this.new_judul, this.new_genre,
      tanggal, this.new_sutradara,
      this.new_sinopsis, this.new_actors).subscribe((response: any) => {
        if (response.result === 'success') {
          this.router.navigate(['/admin/movie']);
        }
        else {
          alert(response.message)
        }
      });; 
  }

  ngOnInit() {
  }

}
