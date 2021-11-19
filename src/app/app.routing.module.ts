import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenreComponent} from './genre/genre.component';
import {FilmComponent} from './film/film.component';

const router: Routes = [
    {path: '', redirectTo: 'genre', pathMatch: 'full'},
    {path: 'genre', component: GenreComponent},
    {path: 'genre/:genreId', component: GenreComponent},
    {path: 'film/:id', component: FilmComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
