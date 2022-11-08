import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { PublicComponent } from './layouts/public/public.component';
import { PrivateComponent } from './layouts/private/private.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { PersonMoviesComponent } from './components/person/person-movies/person-movies.component';
import { ListPopularPersonComponent } from './views/admin/person/list-popular-person/list-popular-person.component';
import { DetailsPopularPersonComponent } from './views/admin/person/details-popular-person/details-popular-person.component';
import { DetailsPopularFilmComponent } from './views/admin/films/details-popular-film/details-popular-film.component';
import { ListPopularFilmComponent } from './views/admin/films/list-popular-film/list-popular-film.component';
import { FilmListComponent } from './components/film/film-list/film-list.component';
import { CardFilmsComponent } from './components/film/card-film/card-film.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';

// auth views
import { FavListComponent } from './components/fav-list/fav-list.component';
import { FavoriteComponent } from './views/auth/favorite/favorite.component';
import { RatedFilmListComponent } from './components/film/rated-film-list/rated-film-list.component';

// components for views and layouts
import { NavbarComponent } from './components/bars/navbar/navbar.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { SidebarComponent } from './components/bars/sidebar/sidebar.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    HeaderStatsComponent,
    NavbarComponent,
    PublicComponent,
    PrivateComponent,
    PersonListComponent,
    PersonDetailsComponent,
    PersonMoviesComponent,
    ListPopularPersonComponent,
    DetailsPopularPersonComponent,
    FavListComponent,
    FavoriteComponent,
    DetailsPopularFilmComponent,
    ListPopularFilmComponent,
    FilmDetailsComponent,
    FilmListComponent,
    CardFilmsComponent,
    FilmDetailComponent,
    RatedFilmListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
