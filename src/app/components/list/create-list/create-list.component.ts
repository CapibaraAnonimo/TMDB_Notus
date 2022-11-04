import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateListDto } from 'src/app/models/dto/create-list.dto';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  name: string = '';
  description: string = '';
  language: string = 'en-US';
  list: CreateListDto = {} as CreateListDto;
  list_id: number = 0;
  idList: number[] = [];

  constructor(private listService: ListsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qParams => {
      this.name = qParams['name'];
      this.description = qParams['description'];
    });

    this.listService.createList(new CreateListDto(this.name, this.description, this.language)).subscribe(resp => {
      alert(resp.status_message);
      window.location.href = `http://localhost:4200/auth/lists`;
    });
  }
}