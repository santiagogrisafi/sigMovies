import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Serie } from 'src/app/interfaces/serieModel';
import { SeriesTVService } from 'src/services/series-tv.service';

@Component({
  selector: 'app-series-tv',
  templateUrl: './series-tv.component.html',
  styleUrls: ['./series-tv.component.css']
})
export class SeriesTVComponent implements OnInit {

  @ViewChild('termino') termino!: ElementRef<HTMLInputElement>;
  public series: Serie[]=[];
  public type: String = "";
  public habilitar2: boolean = false; 
  public mostrar: boolean = false;
  constructor(private serieService: SeriesTVService) { }

  buscar(){
    this.serieService.searchSeries(this.termino.nativeElement.value).subscribe((...resp: Serie[]) => this.series = resp[0].results);
    this.habilitar2=false;
    this.termino.nativeElement.value = "";
    return this.mostrar= true;
  }

  ngOnInit(): void {
  }

  verSerie(event: any){}

  paginar(number: any){
    switch(this.type){
        case "rated":
          this.verSeriesTopRated(number); 
        break;
        case "popular":
          this.verSeriesPopular(number);
        break;
        case "upcoming":
          this.verSeriesUpComing(number);
        break;
    }
  }

  verSeriesTopRated(page: any): Boolean{
    this.habilitar2=true;
    this.serieService.getTopRatedMovies(page).subscribe((...series: Serie[]) => this.series = series[0].results);
    return this.mostrar= true;
  }

  verSeriesPopular(page: any): Boolean{
    this.habilitar2=true;
    this.serieService.getPopularSeries(page).subscribe((...series: Serie[]) => this.series = series[0].results);
    return this.mostrar= true;
  }

  verSeriesUpComing(page: any): Boolean{
    this.habilitar2=true;
    this.serieService.getUpcomingSeries(page).subscribe((...series: Serie[]) => this.series = series[0].results);
    return this.mostrar= true;
  }

}
