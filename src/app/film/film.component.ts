import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {FilmService} from '../shared/service/film.service';
import {Movie} from '../shared/model/film';

@Component({
  selector: 'app-film-page',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  movie: Movie;
  videos: any;
  src: any;
  dangerousVideoUrl: any;
  checkVideo = false;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private title: Title,
  ) {
  }

  ngOnInit() {
    this.getById();
    this.getVideo();
  }

  private getById() {
    this.filmService.getById(this.route.snapshot.params.id)
      .subscribe(res => {
        this.movie = res;
        this.title.setTitle(this.movie.title + ' - ' + this.movie.genres[0].name);
      });

  }


  private getVideo() {
    this.filmService.getMovie(this.route.snapshot.params.id).subscribe((videos: any) => {
      this.videos = videos.results[0];
      this.updateVideoUrl(this.videos.key);
      this.checkVideo = true;
    });
  }


  private updateVideoUrl(id: string) {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }


}
