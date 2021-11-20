import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { DetailsComponent } from './components/details/details.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { CastComponent } from './components/cast/cast.component';



@NgModule({
  declarations: [
    SerieComponent,
    DetailsComponent,
    SeasonsComponent,
    CastComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  exports:[
    SerieComponent,
    DetailsComponent
  ],
})
export class SerieModule { }
