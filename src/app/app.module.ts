import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';
import {GenreComponent} from './genre/genre.component';
import {FilmComponent} from './film/film.component';
import {FilterPipe} from './shared/pipes/filter.pipe';
import {Interceptor} from './shared/interceptor/interceptor.service';
import {FormsModule} from '@angular/forms';

const components = [
  AppComponent,
  GenreComponent,
  FilmComponent
];

const pipes = [
  FilterPipe
];


@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ...pipes,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
