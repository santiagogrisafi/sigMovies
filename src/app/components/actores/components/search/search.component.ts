import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/app/interfaces/actorModel';
import { ActoresService } from '../../../../../services/actores.service';
import { Actor } from '../../../../interfaces/actorModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public termino: String = "";
  public actores: Result[] = [];
  constructor(private ActoresService: ActoresService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.ActoresService.getActores(this.termino).subscribe((...actores: Result[]) => {
      return this.actores = actores[0].results;
    });
  }

}
