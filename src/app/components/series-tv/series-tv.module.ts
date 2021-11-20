import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesTVComponent } from './series-tv.component';
import { CardsComponent } from '../series-tv/components/cards/cards.component';
import { PipesModule } from '../../pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    SeriesTVComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    NgxPaginationModule,
  ],
  exports:[
    SeriesTVComponent,
    CardsComponent,
  ]
})
export class SeriesTVModule { }
