import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Serie, Cast } from '../app/interfaces/serieModel';

@Injectable({
  providedIn: 'root'
})
export class SeriesTVService {

  constructor(private http: HttpClient) { }

  public params={
    api_key:"e2497b327e300807dee98a0db7adb1b4",
    language:"es-ES"
  }

  searchSeries(term:String):Observable<Serie>{
    return this.http.get<Serie>(`${environment.url}/search/tv?query=${term}`,{ params: this.params});
  }

  getSerie(id:String):Observable<Serie>{
    return this.http.get<Serie>(`${environment.url}/tv/${id}`,{ params: this.params});
  }

  getTopRatedMovies(page:number): Observable<Serie>{
    return this.http.get<Serie>(`${environment.url}/tv/top_rated?page=${page}`,{ params: this.params});
  }

  getPopularSeries(page:number): Observable<Serie>{
    return this.http.get<Serie>(`${environment.url}/tv/popular?page=${page}`,{ params: this.params});
  }

  getUpcomingSeries(page:number): Observable<Serie>{
    return this.http.get<Serie>(`${environment.url}/tv/on_the_air?page=${page}`,{ params: this.params});
  }

  getCast(id: String): Observable<Cast>{
    return this.http.get<Cast>(`${environment.url}/tv/${id}/credits`,{ params: this.params});
  }
}
