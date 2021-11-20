import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../../../../services/crud.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnInit {
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
    private router: Router,
    private CrudService: CrudService
  ) {}

  ngOnInit(): void {}

  submitUsers() {
    if (!this.formUsuarios.valid) {
      this.formUsuarios.markAllAsTouched();
      return;
    } else
      this.CrudService.postUsuario(this.formUsuarios.value).subscribe(() => {
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
