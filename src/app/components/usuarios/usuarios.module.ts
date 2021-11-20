import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaComponent } from './crud/alta/alta.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios.component';
import { PutComponent } from './crud/put/put.component';



@NgModule({
  declarations: [
    AltaComponent,
    UsuariosComponent,
    PutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    AltaComponent,
    UsuariosComponent,
    PutComponent,
  ]
})
export class UsuariosModule { }
