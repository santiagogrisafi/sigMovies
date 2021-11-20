import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actorModel';
import { ActoresService } from '../../../services/actores.service';
import { Result } from '../../interfaces/actorModel';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {

  public actores: Result[] = [];
  public hrefWikipedia: String = "";
  constructor(private ActoresService: ActoresService) { }

  ngOnInit(): void {
    
    }

  verActores(event: any){
    
  }

}
