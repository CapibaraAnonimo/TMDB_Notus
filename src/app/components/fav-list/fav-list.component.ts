import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/app/models/interfaces/favorite/get-list.interface';
import { AccountService } from 'src/app/services/account.service';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  account_id: number = 0;
  favorites: Favorites[] = [];
  numPages: number = 0;
  page: number = 1;
  login = false;

  constructor(private accountService: AccountService, private favService: FavService) { }

  ngOnInit(): void {
    if (localStorage.getItem('session_id') != null) {
      this.login = true;
    };

    this.accountService.getAccountDetails().subscribe(resp => {
      this.account_id = resp.id;
    });

    this.favService.getFavorites(this.account_id, this.page).subscribe(resp => {
      this.favorites = resp.results;
      this.numPages = resp.total_pages;
    });
  }

  showImgMovie(poster_path: string) {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }

  next() {
    this.page += 1;
    this.favService.getFavorites(this.account_id, this.page).subscribe(resp => {
      this.favorites = resp.results;
    });
  }

  pre() {
    this.page -= 1;
    this.favService.getFavorites(this.account_id, this.page).subscribe(resp => {
      this.favorites = resp.results;
    });
  }
}