import { Injectable } from '@angular/core';
import { data, IMovie } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovieById(id: number): IMovie {
    let movie=data.find((m) => m.id == id)
    console.log(movie);
    return movie;
  }


}
