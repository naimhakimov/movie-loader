import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FilmService} from './shared/service/film.service';
import {Genres, ResponseGenres} from './shared/model/film';
import {FilterPipe} from './shared/pipes/filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genres: Genres[];
  title: string;
  constructor(
      private router: Router,
      private dataService: FilmService,
      private filterPipe: FilterPipe,
      ) {
  }

  ngOnInit() {
    this.dataService.getListFilm()
        .subscribe((response: ResponseGenres) => {
          this.genres = response.genres;
          this.filterPipe.transform(this.genres)
        });
  }

  routerLink(genre: Genres) {
    this.router.navigate(['/genre', genre.id], {
      queryParams: {
        genre: genre.name
      }
    })
  }
}
