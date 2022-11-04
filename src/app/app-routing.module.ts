import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { DetailsPopularPersonComponent } from "./views/admin/person/details-popular-person/details-popular-person.component";
import { ListPopularPersonComponent } from "./views/admin/person/list-popular-person/list-popular-person.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import {FilmListComponent} from './components/film/film-list/film-list.component';
import {FilmDetailComponent} from './components/film/film-detail/film-detail.component';

const routes: Routes = [
  // admin views
  {
    // Cambiar a public, y cambiar todos los routerLink
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "person-list", component: ListPopularPersonComponent },
      { path: "person-details/:id/:page", component: DetailsPopularPersonComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },

  //{ path: "private"},

  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: 'films', children: [
      {path: '', component: FilmListComponent},
      {path: ':id', component: FilmDetailComponent},
    ]},
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
