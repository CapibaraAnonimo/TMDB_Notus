import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private listService: ListsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.listService.createList(new CreateListDto(this.name, this.description, this.language)).subscribe(resp => {
      alert(resp.status_message);
      this.router.navigate(['/home']);
    });
  }
}
