import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Movie } from 'src/app/interfaces/movieModel';
import { MovieService } from 'src/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Movie [] = [];
  public mostrar: boolean = false;
  public type: String = "";
  public habilitar: boolean = true;
  @ViewChild('termino') termino! : ElementRef<HTMLInputElement>;

  constructor(private movieService: MovieService) {
   }

  ngOnInit(): void {

  }

  buscar(){
    this.movieService.searchMovies(this.termino.nativeElement.value).subscribe((...resp: Movie[]) => this.movies = resp[0].results);
    this.habilitar=false;
    this.termino.nativeElement.value = "";
    return this.mostrar= true;
  }

  verMovie(event: any){}

  paginar(number: any){
    switch(this.type){
        case "rated":
          this.verPeliculasTopRated(number); 
        break;
        case "popular":
          this.verPeliculasPopular(number);
        break;
        case "upcoming":
          this.verPeliculasUpComing(number);
        break;
    }
  }

  verPeliculasTopRated(page: any): Boolean{
    this.habilitar=true;
    this.movieService.getTopRatedMovies(page).subscribe((...movies: Movie[]) => this.movies = movies[0].results);
    return this.mostrar= true;
  }

  verPeliculasPopular(page: any): Boolean{
    this.habilitar=true;
    this.movieService.getPopularMovies(page).subscribe((...movies: Movie[]) => this.movies = movies[0].results);
    return this.mostrar= true;
  }

  verPeliculasUpComing(page: any): Boolean{
    this.habilitar=true;
    this.movieService.getUpcomingMovies(page).subscribe((...movies: Movie[]) => this.movies = movies[0].results);
    return this.mostrar= true;
  }

  

}
