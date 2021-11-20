import { Component, OnInit } from '@angular/core';
import { SeriesTVService } from '../../../services/series-tv.service';
import { Serie, Season } from '../../interfaces/serieModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  public serie!: Serie;
  public seasons: Season[] = [];
  constructor(private SeriesTVService: SeriesTVService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: String = this.ActivatedRoute.snapshot.paramMap.get("id") || "";
    this.SeriesTVService.getSerie(id).subscribe((serie: Serie) => {
      this.serie = serie
      this.seasons = serie.seasons;
    });
  }

}
