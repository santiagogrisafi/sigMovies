import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() tarjetas: any[] = [];
  @Input() habilitar!: boolean;
  @Output() event: EventEmitter<any> = new EventEmitter;
  @Output() event2: EventEmitter<any> = new EventEmitter;
  p: number = 1;
  public collection: any[] = this.tarjetas;
  public length: Number = this.tarjetas.length;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verMovie(id: String){
    this.event.emit(this.router.navigate(["/movie",id]));
  }

  paginar(numero: Number){
    this.event2.emit(numero);
  }
}
