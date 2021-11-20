import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarioModel';
import { CrudService } from '../../../../../services/crud.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  public usuario!: Usuario;
  public formUsuarios: FormGroup = this.fb.group({
    nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
    emailUsuario: [
      '',
      [Validators.required, Validators.minLength(3), Validators.email],
    ],
    passwordUsuario: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private CrudService: CrudService
  ) {}

  ngOnInit(): void {
    let id: Number = Number(this.activatedRouter.snapshot.paramMap.get('id') || "");
    this.CrudService.getUser(id).subscribe((user: Usuario)=> this.usuario = user);
  }

  submitUsers() {
    let id: Number = Number(this.activatedRouter.snapshot.paramMap.get('id') || "");
    if (!this.formUsuarios.valid) {
      this.formUsuarios.markAllAsTouched();
      return;
    } 
      this.CrudService.putUsuario(this.formUsuarios.value, id).subscribe(() => {
        this.formUsuarios.reset({
          nombreUsuario: '',
          emailUsuario: '',
          passwordUsuario: '',
        });
      });
  }
  controlErrores(campo: String) {
    return (
      this.formUsuarios?.controls[campo.toString()]?.invalid &&
      this.formUsuarios.controls[campo.toString()]?.touched &&
      this.formUsuarios.controls[campo.toString()]?.errors
    );
  }
}
