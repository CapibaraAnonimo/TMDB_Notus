import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsResponse } from '../../../models/interfaces/movie/movie-details.interface';
import { ReleaseDateResponse } from '../../../models/interfaces/movie/release-date.interface';
import { MovieService } from '../../../services/movie.service';
import { CreditsService } from '../../../services/credits.service';
import { CreditsResponse } from '../../../models/interfaces/credits/credits.interface';
import { RatingService } from '../../../services/rating.service';
import { RateMovieDto } from '../../../models/dto/rate-movie.dto';
import { createPopper } from '@popperjs/core';
import { ListsService } from '../../../services/lists.service'
import { AccountService } from 'src/app/services/account.service';
import { AddFavoriteDto } from 'src/app/models/dto/add-movie-dto';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {
  film: MovieDetailsResponse;
  releaseDate!: ReleaseDateResponse;
  id!: string;
  credit: CreditsResponse;

  popoverShow = false;
  @ViewChild('btnRef', { static: false }) btnRef: ElementRef;
  popper = document.createElement('div');
  nombre = 'nombre';
  account_id: number = 0;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private creditService: CreditsService, private listService: ListsService,
    private ratingService: RatingService, private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.popper.innerHTML = `<div class="bg-red-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
  <div>
    <div class="bg-red-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg">
      red popover title
    </div>
    <div class="text-white p-3">
      And here's some amazing content. It's very engaging. Right?
    </div>
  </div>
</div>`;

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.movieService.getMovieDetails(+this.id).subscribe(details => {
        this.film = details;
        document.getElementById('bImage').style.backgroundImage = `url(${this.getImage(this.film.backdrop_path)})`;
      });

      this.movieService.getMovieReleaseDate(params.id).subscribe(releaseDate => {
        this.releaseDate = releaseDate;
        debugger;
      });

      this.creditService.getAccountDetails(this.id).subscribe(response => {
        this.credit = response;
      })
    });

    this.accountService.getAccountDetails().subscribe(resp => {
      this.account_id = resp.id;
    });
  }

  getImage(url: string) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }

  rateFilm(rate: number) {
    this.ratingService.rateMovie(this.id, new RateMovieDto(rate));
  }

  togglePopover() {
    if (this.popoverShow) {
      this.popoverShow = false;
      this.destroyPopper();
    } else {
      this.popoverShow = true;
      this.createPoppper();
    }
  }

  destroyPopper() {
    this.popper.parentNode.removeChild(this.popper);
  }

  createPoppper() {
    createPopper(this.btnRef.nativeElement, this.popper, {
      placement: 'bottom',
    });
    this.btnRef.nativeElement.parentNode.insertBefore(this.popper, this.btnRef.nativeElement.nextSibling);
  }

  addFavorite(movieId: number) {
    this.listService.addFavorite(this.account_id, new AddFavoriteDto("movie", movieId, true)).subscribe(resp => {
      alert(resp.status_message);
      this.router.navigate(['/favorites']);
    });
  }
}
