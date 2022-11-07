import { Component, OnInit } from '@angular/core';
import { AddFavoriteDto } from 'src/app/models/dto/add-movie-dto';
import { Favorites } from 'src/app/models/interfaces/list/get-list.interface';
import { Item } from 'src/app/models/interfaces/list/list-details.interface';
import { Movie } from 'src/app/models/interfaces/movie/movie.interface';
import { AccountService } from 'src/app/services/account.service';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  account_id: number = 0;
  favorites: Favorites[] = [];
  movieFavList: Item[] = [];
  numPages: number = 0;
  page: number = 1;
  showDetails = false;
  login = false;

  constructor(private accountService: AccountService, private listService: ListsService) { }

  ngOnInit(): void {
    if (localStorage.getItem('session_id') != null) {
      this.login = true;
    };

    this.accountService.getAccountDetails().subscribe(resp => {
      this.account_id = resp.id;
    });

    this.listService.getFavorites(this.account_id, this.page).subscribe(resp => {
      this.favorites = resp.results;
      this.numPages = resp.total_pages;
    });
  }

  /*getDetails(list_id: number) {
    if (this.showDetails) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
      this.listService.getListDetails(list_id).subscribe(resp => {
        this.movieFavList = resp.items;
      });
    }
  }*/

  showImgMovie(poster_path: string) {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }

  next() {
    this.page += 1;
    this.listService.getFavorites(this.account_id, this.page).subscribe(resp => {
      this.favorites = resp.results;
    });
  }

  pre() {
    this.page -= 1;
    this.listService.getFavorites(this.account_id, this.page).subscribe(resp => {
      this.favorites = resp.results;
    });
  }
}