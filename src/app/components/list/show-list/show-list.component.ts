import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/models/interfaces/list/get-list.interface';
import { AccountService } from 'src/app/services/account.service';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  account_id: number = 0;
  allList: Lists[] = [];
  numPages: number = 0;
  page: number = 1;

  constructor(private accountService: AccountService, private listService: ListsService) { }

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.account_id = resp.id;
    });

    this.listService.getLists(this.account_id, this.page).subscribe(resp => {
      this.allList = resp.results;
      this.numPages = resp.total_pages;
    });
  }

  showDetails(list_id: number) {
    this.listService.getListDetails(list_id).subscribe(resp => {
      
    })
  }
}