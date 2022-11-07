import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { DetailsPopularPersonComponent } from './views/admin/person/details-popular-person/details-popular-person.component';
import { ListPopularPersonComponent } from './views/admin/person/list-popular-person/list-popular-person.component';
import { FilmListComponent } from './components/film/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';
import { RatedFilmListComponent } from './components/film/rated-film-list/rated-film-list.component';

// auth views
import { FavoriteComponent } from './views/auth/favorite/favorite.component';
import { ListPopularFilmComponent } from './views/admin/films/list-popular-film/list-popular-film.component';
import { DetailsPopularFilmComponent } from './views/admin/films/details-popular-film/details-popular-film.component';

const routes: Routes = [
  // default views
  { path: '', component: AdminComponent },

  // admin views
  {
    // Cambiar a public, y cambiar todos los routerLink
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "person-list", component: ListPopularPersonComponent },
      { path: "person-details/:id", component: DetailsPopularPersonComponent },
      { path: "films", component: ListPopularFilmComponent },
      { path: 'film-details/:id', component: DetailsPopularFilmComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },

  //{ path: "private"},

  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: "favorites", component: FavoriteComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },

  // no layout views
  /*{
    path: 'films', children: [
      { path: '', component: FilmListComponent },
      { path: ':id', component: FilmDetailsComponent },
    ]
  },*/
  { path: 'rated', component: RatedFilmListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
