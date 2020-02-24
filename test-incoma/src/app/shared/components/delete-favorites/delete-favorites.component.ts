import { Component, Input, OnInit } from '@angular/core';
import { BookInfo } from "@sharedModels/book-info.type";
import { FavoritesService } from "@sharedServices/favorites/favorites.service";

@Component({
  selector: 'app-delete-favorites',
  templateUrl: './delete-favorites.component.html',
  styleUrls: ['./delete-favorites.component.scss']
})
export class DeleteFavoritesComponent {
  @Input()
  public item: BookInfo;

  constructor(private favoritesService: FavoritesService) {
  }

  public delete(): void {
    this.favoritesService.delete(this.item);
  }
}
