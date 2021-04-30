import { Component, OnInit } from '@angular/core';
import { data, IMovie } from 'src/app/model/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:IMovie[]
  constructor() {
    this.movies=data;
   }

  ngOnInit(): void {
  }

}
