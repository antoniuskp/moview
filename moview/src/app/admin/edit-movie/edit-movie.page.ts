import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
  standalone: false,
})
export class EditMoviePage implements OnInit {
  // movieIndex: number = 0;
  movie: any = {};

  edit_poster = ""
  edit_judul = ""
  edit_genre = ""
  edit_tanggal=""
  edit_sutradara = ""
  edit_sinopsis = ""
  edit_actors: Array<{ name: string, role: string }> = [];
  edit_actor_name = '';
  edit_actor_role = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService,
    private router: Router
  ) { }

  addActor() {
    if (this.edit_actor_name && this.edit_actor_role) {
      this.edit_actors.push({ name: this.edit_actor_name, role: this.edit_actor_role });
      this.edit_actor_name = '';
      this.edit_actor_role = '';
    }
  }

  removeActor(index: number) {
    this.edit_actors.splice(index, 1);
  }

  editmovie() {
    const tanggal = new Date(this.edit_tanggal).toISOString().split('T')[0];
    this.movieService.editMovie(this.movie.id, this.edit_poster, this.edit_judul, this.edit_genre,
      tanggal, this.edit_sutradara, this.edit_sinopsis, this.edit_actors).subscribe(
        (response: any) => {
          if (response.result === 'success') {
            // alert("success")
            this.router.navigate(['/admin/movie'], { state: { reload: true } });
          }
          else {
            alert(response.message)
          }
        });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.movieIndex = +params['index'];
      // this.movie = this.movieService.movies[this.movieIndex];
      this.movieService.detailMovie(params['id']).subscribe(
        (data) => {
          this.movie = this.movieService.parseDetailMovie(data);
          this.edit_poster = this.movie.poster;
          this.edit_judul = this.movie.judul;
          this.edit_genre = this.movie.genre;
          this.edit_tanggal = this.movie.tanggalRilis;
          this.edit_sutradara = this.movie.sutradara;
          this.edit_sinopsis = this.movie.sinopsis;
          this.edit_actors = [...this.movie.actors];
        }
      );
    })
  }

}
