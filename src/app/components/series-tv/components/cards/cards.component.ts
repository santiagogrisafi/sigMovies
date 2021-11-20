import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/interfaces/serieModel';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cards: Serie[] = [];
  @Output() event: EventEmitter<any> = new EventEmitter;
  @Output() event2: EventEmitter<any> = new EventEmitter;
  @Input() habilitar2!: boolean;
  public p: number = 1;
  public collection: any[] = this.cards;
  public length: Number = this.cards.length;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verSerie(id: Number){
    this.event.emit(this.router.navigate(["/series",id]));
  }

  paginar(numero: Number){
    this.event2.emit(numero);
  }

}
