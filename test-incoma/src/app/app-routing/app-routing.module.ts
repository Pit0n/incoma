import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "../components/main-page/main-page.component";
import { FavoritesComponent } from "../components/favorites/favorites.component";
import { SearchResultComponent } from "../components/search-result/search-result.component";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: SearchResultComponent },
      { path: 'favorites', component: FavoritesComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
