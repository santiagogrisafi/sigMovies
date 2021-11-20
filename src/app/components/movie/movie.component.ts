import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movieModel';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie!: Movie;
  constructor(private activateRoute: ActivatedRoute, private movieService: MovieService) {
   }

   

  ngOnInit(): void {
    let id: String = this.activateRoute.snapshot.paramMap.get("id") || "";
    this.movieService.getMovie(id).subscribe((movie: Movie) => {
      this.movie = movie;
    });
    
  }
}
