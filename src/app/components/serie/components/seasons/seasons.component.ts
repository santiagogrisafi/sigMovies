import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serieModel';
import { Season } from '../../../../interfaces/serieModel';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  @Input() seasons: Season[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
