import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrimeNgModule } from "./prime-ng.module";
import { ApiService } from "@api/api.service";
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ListItemComponent } from './shared/components/list-item/list-item.component';
import { ListScrollerComponent } from './shared/components/list-scroller/list-scroller.component';
import { SearchFormComponent } from './components/main-page/search-form/search-form.component';
import { FilterFormComponent } from './shared/components/filter-form/filter-form.component';
import { SearchService } from "@sharedServices/search/search.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FavoritesComponent,
    SearchResultComponent,
    ListItemComponent,
    ListScrollerComponent,
    SearchFormComponent,
    FilterFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNgModule,
    ScrollingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
