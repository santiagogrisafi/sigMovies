import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarioModel';
import { CrudService } from '../../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public users: Usuario[] = [];
  constructor(private CrudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.CrudService.getUsuario().subscribe((user: Usuario[])=> this.users = user);
  }

  getIdUpdate(id: any){
    this.router.navigate([`/usuarios/${id}`]);
  }

}
