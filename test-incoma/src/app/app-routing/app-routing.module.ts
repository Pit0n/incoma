import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "../components/main-page/main-page.component";
import { FavoritesComponent } from "../components/favorites/favorites.component";
import { BooksListComponent } from "../components/books-list/books-list.component";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: BooksListComponent },
      { path: 'favorites', component: FavoritesComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
