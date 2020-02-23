import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrimeNgModule } from "./prime-ng.module";
import { ApiService } from "@api/api.service";
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ListItemComponent } from './shared/components/list-item/list-item.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { ListScrollerComponent } from './shared/components/list-scroller/list-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FavoritesComponent,
    SearchResultComponent,
    ListItemComponent,
    ListScrollerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
    ScrollingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
