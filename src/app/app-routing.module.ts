import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/common/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieResolveService } from './resolves/movie-resolve.service';
import { MovierouteactivatorService } from './services/movierouteactivator.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: {movie: MovieResolveService},
    canActivate: [MovierouteactivatorService],
  },{
    path:'404',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
