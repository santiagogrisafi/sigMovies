import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/actorModel';
import { ActoresService } from '../../../../../services/actores.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public actores: Result[] = [];
  public hrefWikipedia: String = "";
  @Input() resultados: Result[] = [];
  @Input() termino: String = "";
  constructor(private ActoresService: ActoresService) { }

  ngOnInit(): void {
    this.ActoresService.getActoresPopulares(1).subscribe((...actores: any[])=> {
      this.actores = actores[0].results;
      this.hrefWikipedia=`https://es.wikipedia.org/wiki/`;
    })
  }
}
