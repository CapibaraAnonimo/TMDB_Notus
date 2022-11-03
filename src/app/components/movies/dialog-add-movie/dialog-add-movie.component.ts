import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddMovieDto } from 'src/app/models/dto/add-movie-dto';
import { Lists } from 'src/app/models/interfaces/list/get-list.interface';
import { DialogAddMovie } from 'src/app/models/interfaces/movie/movie-add-dialog.interface';

import { AccountService } from 'src/app/services/account.service';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-dialog-add-movie',
  templateUrl: './dialog-add-movie.component.html',
  styleUrls: ['./dialog-add-movie.component.css']
})
export class DialogAddMovieComponent implements OnInit {

  allList: Lists[] = [];
  numPages: number = 0;
  page: number = 1;
  list_id: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogAddMovie, private listService: ListsService, private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(respAc => {
      this.listService.getLists(respAc.id, this.page).subscribe(respList => {
        this.allList = respList.results;
        this.numPages = respList.total_pages;
      });
    });
  }

  addToFav() {
    debugger;
    this.listService.addMovie(new AddMovieDto(this.data.movie_id), this.list_id).subscribe(resp => {
      alert(resp.status_message);
      this.router.navigate(['/home']);
    });
  }
}
