import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastComponent } from './cast/cast.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CastComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  exports:[
    CastComponent,
    DetailsComponent
  ]
})
export class ComponentsModule { }
