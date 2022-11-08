import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { PublicComponent } from './layouts/public/public.component';
import { PrivateComponent } from './layouts/private/private.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { DetailsPopularPersonComponent } from './views/admin/person/details-popular-person/details-popular-person.component';
import { ListPopularPersonComponent } from './views/admin/person/list-popular-person/list-popular-person.component';
import { FilmListComponent } from './components/film/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';
import { RatedFilmListComponent } from './components/film/rated-film-list/rated-film-list.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
// import { AccountListComponent } from './views/auth/list/account-list/account-list.component';
// import { NewListComponent } from './views/auth/list/new-list/new-list.component';

// no layouts views
import { FavoriteComponent } from './views/auth/favorite/favorite.component';
import { ListPopularFilmComponent } from './views/admin/films/list-popular-film/list-popular-film.component';
import { DetailsPopularFilmComponent } from './views/admin/films/details-popular-film/details-popular-film.component';

const routes: Routes = [
  // index view
  { path: '', pathMatch: 'full', redirectTo: 'public/dashboard' },

  // public views
  {
    path: "public",
    component: PublicComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "person-list", component: ListPopularPersonComponent },
      { path: "person-details/:id", component: DetailsPopularPersonComponent },
      { path: "films", component: ListPopularFilmComponent },
      { path: 'film-details/:id', component: DetailsPopularFilmComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },

  // private views
  {
    path: 'private',
    component: PrivateComponent,
    children: [
      { path: "favorites", component: FavoriteComponent },
      { path: 'rated', component: RatedFilmListComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
