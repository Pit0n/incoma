import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { PrimeNgModule } from "./prime-ng.module";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FavoritesComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
