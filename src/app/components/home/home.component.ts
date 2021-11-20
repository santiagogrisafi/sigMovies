import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movieModel';
import { SeriesTVService } from 'src/services/series-tv.service';
import { MovieService } from '../../../services/movie.service';
import { Serie } from '../../interfaces/serieModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[]=[];
  public series: Serie[]=[];
  constructor(private MovieService: MovieService, private SeriesService: SeriesTVService) { }

  ngOnInit(): void {
    this.MovieService.getPopularMovies(1).subscribe((...movie) => this.movies = movie[0].results);
    this.SeriesService.getPopularSeries(1).subscribe((...series: Serie[]) => this.series = series[0].results);
  }

}
