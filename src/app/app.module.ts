import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MovieModule } from './components/movie/movie.module';
import { MoviesModule } from './components/movies/movies.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieService } from 'src/services/movie.service';
import { SeriesTVService } from 'src/services/series-tv.service';
import { PipesModule } from './pipes/pipes.module';
import { SeriesTVModule } from './components/series-tv/series-tv.module';
import { SerieModule } from './components/serie/serie.module';
import { ActoresModule } from './components/actores/actores.module';
import { UsuariosModule } from './components/usuarios/usuarios.module';
import { ActoresService } from '../services/actores.service';
import { CrudService } from 'src/services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    MovieModule,
    MoviesModule,
    PipesModule,
    NgxPaginationModule,
    SeriesTVModule,
    SerieModule,
    UsuariosModule,
    ActoresModule,
  ],
  providers: [ MovieService, SeriesTVService, ActoresService, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
