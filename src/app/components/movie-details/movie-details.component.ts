import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie;
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.movie=this.route.snapshot.data['movie'];
    console.log(this.movie);

  }
}
