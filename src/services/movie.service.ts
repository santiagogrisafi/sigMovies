import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../app/interfaces/movieModel';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public params={
    api_key:"e2497b327e300807dee98a0db7adb1b4",
    language:"es-ES"
  }

  constructor(private http: HttpClient) { }

  getMovie(id:String):Observable<Movie>{
    return this.http.get<Movie>(`${environment.url}/movie/${id}`,{ params: this.params});
  }

  getTopRatedMovies(page:number): Observable<Movie>{
    return this.http.get<Movie>(`${environment.url}/movie/top_rated?page=${page}`,{ params: this.params});
  }

  getPopularMovies(page:number): Observable<Movie>{
    return this.http.get<Movie>(`${environment.url}/movie/popular?page=${page}`,{ params: this.params});
  }

  getUpcomingMovies(page:number): Observable<Movie>{
    return this.http.get<Movie>(`${environment.url}/movie/upcoming?page=${page}`,{ params: this.params});
  }

  getCast(id: String): Observable<Movie>{
    return this.http.get<Movie>(`${environment.url}/movie/${id}/credits`,{ params: this.params});
  }

  searchMovies(term:String):Observable<Movie>{
    return this.http.get<Movie>(`${environment.url}/search/movie?query=${term}`,{ params: this.params});
  }
  
}
