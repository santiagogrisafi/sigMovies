import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MovieComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RouterModule
  ],
  exports:[
    MovieComponent,
  ]
})
export class MovieModule { }
