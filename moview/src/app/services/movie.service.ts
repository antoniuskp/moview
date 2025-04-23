import { Injectable } from '@angular/core';
import { IReview } from '../interfaces/review';
import { IMoview } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = [
    {
      poster: 'https://m.media-amazon.com/images/I/71ImBV+WHYL._UF1000,1000_QL80_.jpg',
      judul: 'The Great Adventure',
      genre: 'Action, Adventure',
      tanggalRilis: new Date('2023-12-15'),
      sutradara: 'Jane Doe',
      sinopsis: 'Sekelompok petualang menghadapi tantangan luar biasa saat menjelajahi dunia yang belum dikenal.',
      actors: [
        { name: 'John Smith', role: 'Hero' },
        { name: 'Emma Brown', role: 'Villain' },
        { name: 'Michael Lee', role: 'Sidekick' }
      ],
      reviews: [
        { username: 'movieFan88', review: 'Filmnya bagus, tapi kurang cocok di aku', rating: 3, date: new Date('2024-01-10') },
        { username: 'cinemaLover', review: 'Akting pemeran utamanya luar biasa.', rating: 4, date: new Date('2024-01-15') }
      ]
    },
    {
      poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
      judul: 'Interstellar',
      genre: 'Sci-Fi, Drama',
      tanggalRilis: new Date('2014-11-07'),
      sutradara: 'Christopher Nolan',
      sinopsis: 'Sebuah misi antariksa dilakukan untuk menemukan planet baru demi kelangsungan hidup manusia.',
      actors: [
        { name: 'Matthew McConaughey', role: 'Cooper' },
        { name: 'Anne Hathaway', role: 'Brand' },
        { name: 'Jessica Chastain', role: 'Murph' }
      ],
      reviews: [
        { username: 'spacegeek', review: 'Konsep ruang-waktu-nya keren banget!', rating: 5, date: new Date('2015-01-01') },
        { username: 'scienceNerd', review: 'Mikir keras, tapi worth it.', rating: 5, date: new Date('2015-02-10') }
      ]
    },
    {
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/8753733ac616155963cc440c3cf5367f45d7685b672c5b9c35bc7f182aec17c4.jpg',
      judul: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      tanggalRilis: new Date('2008-07-18'),
      sutradara: 'Christopher Nolan',
      sinopsis: 'Batman menghadapi ancaman baru dari Joker, kriminal gila yang ingin menciptakan kekacauan di Gotham.',
      actors: [
        { name: 'Christian Bale', role: 'Bruce Wayne / Batman' },
        { name: 'Heath Ledger', role: 'The Joker' },
        { name: 'Aaron Eckhart', role: 'Harvey Dent' }
      ],
      reviews: [
        { username: 'batmanFan', review: 'Film ini benar-benar mendefinisikan kembali superhero!', rating: 5, date: new Date('2008-07-19') },
        { username: 'jokerFan', review: 'Heath Ledger memberikan performa luar biasa sebagai Joker.', rating: 5, date: new Date('2008-07-19') }
      ]
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      judul: 'Inception',
      genre: 'Action, Adventure, Sci-Fi',
      tanggalRilis: new Date('2010-07-16'),
      sutradara: 'Christopher Nolan',
      sinopsis: 'Seorang pencuri profesional menyusup ke mimpi orang lain untuk mencuri ide, tapi misi terbesarnya adalah menanamkan ide.',
      actors: [
        { name: 'Leonardo DiCaprio', role: 'Dom Cobb' },
        { name: 'Joseph Gordon-Levitt', role: 'Arthur' },
        { name: 'Ellen Page', role: 'Ariadne' }
      ],
      reviews: [
        { username: 'dreamer123', review: 'Misteri dan visualnya menakjubkan!', rating: 5, date: new Date('2010-07-17') },
        { username: 'logicFan', review: 'Kisah yang sangat memutar otak dan penuh kejutan.', rating: 5, date: new Date('2010-07-17') }
      ]
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg',
      judul: 'The Matrix',
      genre: 'Action, Sci-Fi',
      tanggalRilis: new Date('1999-03-31'),
      sutradara: 'The Wachowskis',
      sinopsis: 'Seorang programmer menemukan bahwa dunia yang ia kenal adalah simulasi dan bergabung dengan pemberontakan melawan penciptanya.',
      actors: [
        { name: 'Keanu Reeves', role: 'Neo' },
        { name: 'Laurence Fishburne', role: 'Morpheus' },
        { name: 'Carrie-Anne Moss', role: 'Trinity' }
      ],
      reviews: [
        { username: 'cyberpunkFan', review: 'Film ini mengubah cara kita melihat teknologi dan realitas.', rating: 5, date: new Date('1999-03-31') },
        { username: 'actionLover', review: 'Aksi dan filosofi filmnya luar biasa.', rating: 5, date: new Date('1999-04-01') },
        { username: 'mimi', review: 'Pemerannya kurang cocok menurut aku', rating: 3, date: new Date('1999-04-01') }
      ]
    },
    {
      poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
      judul: 'Avengers: Endgame',
      genre: 'Action, Adventure, Sci-Fi',
      tanggalRilis: new Date('2019-04-26'),
      sutradara: 'Anthony Russo, Joe Russo',
      sinopsis: 'Para Avengers yang tersisa mencoba membalikkan kekacauan yang ditinggalkan oleh Thanos demi menyelamatkan alam semesta.',
      actors: [
        { name: 'Robert Downey Jr.', role: 'Tony Stark / Iron Man' },
        { name: 'Chris Evans', role: 'Steve Rogers / Captain America' },
        { name: 'Scarlett Johansson', role: 'Natasha Romanoff / Black Widow' }
      ],
      reviews: [
        { username: 'marvelFan', review: 'Akhir yang emosional dan epik untuk perjalanan panjang.', rating: 5, date: new Date('2019-04-27') },
        { username: 'endgameCritic', review: 'Penuh aksi dan fan service. Luar biasa!', rating: 5, date: new Date('2019-04-28') }
      ]
    },
    {
      poster: 'https://cdn.rri.co.id/berita/Kendari/o/1734761587860-Parasite/2q3w46pkbqr038l.jpeg',
      judul: 'Parasite',
      genre: 'Drama, Thriller',
      tanggalRilis: new Date('2019-05-30'),
      sutradara: 'Bong Joon Ho',
      sinopsis: 'Keluarga miskin secara perlahan menyusup ke rumah keluarga kaya, hingga rahasia gelap mulai terungkap.',
      actors: [
        { name: 'Song Kang-ho', role: 'Kim Ki-taek' },
        { name: 'Lee Sun-kyun', role: 'Park Dong-ik' },
        { name: 'Cho Yeo-jeong', role: 'Choi Yeon-gyo' }
      ],
      reviews: [
        { username: 'cinemaArt', review: 'Lumayan disturbing buat aku.', rating: 3, date: new Date('2019-06-01') },
        { username: 'thrillerFan', review: 'Ketegangannya konsisten dan sangat mengejutkan.', rating: 4, date: new Date('2019-06-03') }
      ]
    },
    {
      poster: 'https://upload.wikimedia.org/wikipedia/id/9/98/Coco_%282017_film%29_poster.jpg',
      judul: 'Coco',
      genre: 'Animation, Adventure, Family',
      tanggalRilis: new Date('2017-11-22'),
      sutradara: 'Lee Unkrich, Adrian Molina',
      sinopsis: 'Miguel, seorang anak Meksiko, masuk ke dunia arwah untuk menemukan rahasia keluarga dan impiannya menjadi musisi.',
      actors: [
        { name: 'Anthony Gonzalez', role: 'Miguel' },
        { name: 'Gael García Bernal', role: 'Héctor' },
        { name: 'Benjamin Bratt', role: 'Ernesto de la Cruz' }
      ],
      reviews: [
        { username: 'familyGuy', review: 'Animasi penuh warna dan cerita yang menyentuh hati.', rating: 5, date: new Date('2017-11-23') },
        { username: 'musicLover', review: 'Terlalu banyak musiknya.', rating: 2, date: new Date('2017-11-24') }
      ]
    },
    {
      poster: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png',
      judul: 'Your Name',
      genre: 'Animation, Drama, Fantasy',
      tanggalRilis: new Date('2016-08-26'),
      sutradara: 'Makoto Shinkai',
      sinopsis: 'Seorang anak laki-laki di Tokyo dan seorang gadis di pedesaan Jepang secara misterius mulai bertukar tubuh dan kehidupan mereka berubah selamanya.',
      actors: [
        { name: 'Ryunosuke Kamiki', role: 'Taki Tachibana' },
        { name: 'Mone Kamishiraishi', role: 'Mitsuha Miyamizu' }
      ],
      reviews: [
        {
          username: 'animeenthusiast',
          review: 'Visualnya indah dan cerita bikin baper.',
          rating: 5,
          date: new Date('2017-01-15')
        }
      ]
    },
    {
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/0243e31e3fea5624f9c8532e468d5eb45173e593054886d31162eb20580c3b78.jpg',
      judul: 'La La Land',
      genre: 'Drama, Music, Romance',
      tanggalRilis: new Date('2016-12-09'),
      sutradara: 'Damien Chazelle',
      sinopsis: 'Seorang pianis jazz dan seorang aktris yang sedang merintis karir jatuh cinta di Los Angeles, tapi impian mereka menguji hubungan tersebut.',
      actors: [
        { name: 'Ryan Gosling', role: 'Sebastian' },
        { name: 'Emma Stone', role: 'Mia' }
      ],
      reviews: [
        {
          username: 'melodyfan',
          review: 'Romantis dan musiknya ngena banget!',
          rating: 5,
          date: new Date('2017-01-10')
        }
      ]
    },
    {
      poster: 'https://awsimages.detik.net.id/community/media/visual/2024/02/29/dune-part-two-2.png?w=700&q=90',
      judul: 'Dune',
      genre: 'Adventure, Drama, Sci-Fi',
      tanggalRilis: new Date('2021-10-22'),
      sutradara: 'Denis Villeneuve',
      sinopsis: 'Seorang pemuda berbakat harus melakukan perjalanan ke planet paling berbahaya di alam semesta demi masa depan keluarganya dan bangsanya.',
      actors: [
        { name: 'Timothée Chalamet', role: 'Paul Atreides' },
        { name: 'Zendaya', role: 'Chani' },
        { name: 'Oscar Isaac', role: 'Duke Leto Atreides' }
      ],
      reviews: [
        {
          username: 'scifibuff',
          review: 'Visual dan world-building-nya gila sih!',
          rating: 5,
          date: new Date('2021-11-01')
        }
      ]
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      judul: 'Everything Everywhere All At Once',
      genre: 'Action, Adventure, Comedy',
      tanggalRilis: new Date('2022-03-11'),
      sutradara: 'Daniel Kwan, Daniel Scheinert',
      sinopsis: 'Seorang ibu pemilik laundry terseret ke dalam petualangan lintas dimensi untuk menyelamatkan multiverse dari kehancuran.',
      actors: [
        { name: 'Michelle Yeoh', role: 'Evelyn Wang' },
        { name: 'Ke Huy Quan', role: 'Waymond Wang' },
        { name: 'Stephanie Hsu', role: 'Joy Wang' }
      ],
      reviews: [
        {
          username: 'multiversefan',
          review: 'Aneh tapi dalem. Salah satu film terbaik!',
          rating: 5,
          date: new Date('2022-04-05')
        }
      ]
    }
  ];
  constructor() { }

  addReview(index: number, review: IReview) {
    const movie = this.movies[index];
    if (!movie.reviews) {
      movie.reviews = [];
    }
    movie.reviews.push(review);
  }

  addMovie(p_poster: string, 
    p_judul:string, p_genre:string, 
    p_tanggal:Date, p_sutradara:string, 
    p_sinopsis:string, p_actors: Array<{ name: string, role: string }>){
    this.movies.push({
      poster: p_poster, judul:p_judul, 
      genre:p_genre, tanggalRilis: p_tanggal, 
      sutradara: p_sutradara, sinopsis:p_sinopsis, 
      actors:p_actors, reviews:[]
    })
  }
  
  editMovie(index: number, p_poster: 
    string, p_judul: string, p_genre: 
    string, p_tanggal: Date, p_sutradara: string, 
    p_sinopsis: string, p_actors: Array<{ name: string, role: string }>) {
    const movie = this.movies[index];
    if (movie) {
      movie.poster = p_poster;
      movie.judul = p_judul;
      movie.genre = p_genre;
      movie.tanggalRilis = p_tanggal;
      movie.sutradara = p_sutradara;
      movie.sinopsis = p_sinopsis;
      movie.actors = p_actors;
    }
  }

  deleteMovie(index: number) {
    if (index > -1 && index < this.movies.length) {
      this.movies.splice(index, 1);
    }
  }
}
