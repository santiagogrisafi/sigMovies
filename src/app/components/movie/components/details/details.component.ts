import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() movie: any = {};
  public cast: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    let id: String = this.activatedRoute.snapshot.paramMap.get("id") || "";
    this.movieService.getCast(id).subscribe((...cast: any[]) => this.cast = cast[0].cast);
  }

}
