import { Component, Input, OnInit } from '@angular/core';
import { Cast, Season, Serie } from 'src/app/interfaces/serieModel';
import { SeriesTVService } from '../../../../../services/series-tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() serie!: Serie;
  @Input() seasons: Season[] = [];
  public open: boolean = false;
  public cast: any[] = [];
  public red: String = "red";
  public green: String = "green";
  constructor(private SeriesTVService: SeriesTVService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: String = this.ActivatedRoute.snapshot.paramMap.get("id") || "";
    this.SeriesTVService.getCast(id).subscribe((...cast: Cast[]) => this.cast = cast[0].cast);
  }

}
