import { Routes } from '@angular/router';
import { AddMovieComponent } from './Admin/add-movie/add-movie.component';
import { MoviesListComponent } from './Admin/movies-list/movies-list.component';
import { SideBarComponent } from './Admin/side-bar/side-bar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path:'appcon',
        component:AppComponent
    },
    {
        path: 'AddMovie',
        component: AddMovieComponent
    },
    {
        path: 'movielist',
        component: MoviesListComponent
    },
    {
        path:'sidebar',
        component:SideBarComponent
    }
];
