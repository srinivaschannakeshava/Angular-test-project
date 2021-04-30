import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of } from 'rxjs';
import { IMovie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolveService implements Resolve<IMovie> {

  constructor(private movieServ:MovieService) { }

  resolve( route:ActivatedRouteSnapshot){
    return this.movieServ.getMovieById(+route.params['id']);
  }
}
