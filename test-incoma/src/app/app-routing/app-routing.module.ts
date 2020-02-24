import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "../components/main-page/main-page.component";
import { FavoritesComponent } from "../components/favorites/favorites.component";
import { SearchResultComponent } from "../components/search-result/search-result.component";
import { Links } from "./links.enum";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: Links.search, component: SearchResultComponent },
      { path: Links.favorites, component: FavoritesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
