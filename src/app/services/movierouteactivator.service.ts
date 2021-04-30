import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovierouteactivatorService implements CanActivate {

  constructor(private movieServ:MovieService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    const movieExist=!!this.movieServ.getMovieById(+route.params['id']);
    if(!movieExist)
      this.router.navigate(['/404'])
    return movieExist;
  }
}
