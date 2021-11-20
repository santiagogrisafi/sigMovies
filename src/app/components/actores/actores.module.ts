import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresComponent } from './actores.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { PipesModule } from '../../pipes/pipes.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    ActoresComponent,
    SearchComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    PipesModule,
    FormsModule
  ],
  exports: [
    ActoresComponent
  ],
})
export class ActoresModule { }
