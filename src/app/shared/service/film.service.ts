import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Movie, ResponseGenres, ResponseMovies} from '../model/film';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})

export class FilmService {
  constructor(private http: HttpClient) {
  }

  getPopularMovies() {
    return this.http.get<ResponseMovies>(`${environment.apiUrl}movie/popular?api_key=${environment.apiKey}`);
  }

  getMoviesByGenre(genreId): Observable<ResponseMovies> {
    return this.http.get<ResponseMovies>(`${environment.apiUrl}discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}&with_genres=` + genreId);
  }

  getById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}movie/${id}?api_key=${environment.apiKey}`);
  }

  getListFilm() {
    return this.http.get<ResponseGenres>(`${environment.apiUrl}/genre/movie/list?api_key=${environment.apiKey}`);
  }

  getMovie(id: any): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}movie/${id}/videos?api_key=${environment.apiKey}`);
  }

  getGenreId(id: any) {
    return this.http.get(`${environment.apiUrl}genre/${id}?api_key=${environment.apiKey}`);
  }

}
