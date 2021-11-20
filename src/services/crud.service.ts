import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from 'src/app/interfaces/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public url: String = "http://localhost:8080/usuarios";
  constructor(private http: HttpClient) { }

  getUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}`);
  }

  postUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}`, usuario)
    .pipe(tap((...resp)=> console.log(resp)));
  }

  putUsuario(usuario: Usuario, id: Number):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/${id}`, usuario);
  }

  delUsuario(IdUsuario: Number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.url}/${IdUsuario}`);
  }

  getUser(id:Number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }


}
