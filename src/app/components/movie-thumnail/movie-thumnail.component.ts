import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-thumnail',
  templateUrl: './movie-thumnail.component.html',
  styleUrls: ['./movie-thumnail.component.scss']
})
export class MovieThumnailComponent implements OnInit {
@Input()movie:IMovie;
  constructor() { }

  ngOnInit(): void {
  }

}
