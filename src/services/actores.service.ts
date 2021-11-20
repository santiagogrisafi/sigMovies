import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../app/interfaces/actorModel';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }

   private params ={
    api_key:"e2497b327e300807dee98a0db7adb1b4",
    language:"es-ES"
  }

  getActoresPopulares(page: Number): Observable<Result>{
    return this.http.get<Result>(`${environment.url}/person/popular?page=${page}`,{params:this.params});
  }

  getActores(name: String): Observable<Result>{
    return this.http.get<Result>(`${environment.url}/search/person?query=${name}`,{params:this.params});
  }
}
