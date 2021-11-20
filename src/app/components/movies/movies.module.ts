import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { PipesModule } from '../../pipes/pipes.module';
import { TarjetasComponent } from './components/tarjetas.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MoviesComponent,
    TarjetasComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    NgxPaginationModule
  ],
  exports:[
    MoviesComponent,
    TarjetasComponent
  ]
})
export class MoviesModule { }
