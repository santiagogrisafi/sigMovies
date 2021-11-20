import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesTVComponent } from './components/series-tv/series-tv.component';
import { SerieComponent } from './components/serie/serie.component';
import { ActoresComponent } from './components/actores/actores.component';
import { AltaComponent } from './components/usuarios/crud/alta/alta.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PutComponent } from './components/usuarios/crud/put/put.component';

const routes: Routes = [
  {path: ' ', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'series', component: SeriesTVComponent},
  {path: 'series/:id', component: SerieComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'actores', component: ActoresComponent},
  {path: 'usuarios/alta', component: AltaComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/:id', component: PutComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
