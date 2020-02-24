import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookInfo } from "@sharedModels/book-info.type";
import { FavoritesService } from "@sharedServices/favorites/favorites.service";

@Component({
  selector: 'app-save-favorites',
  templateUrl: './save-favorites.component.html',
  styleUrls: ['./save-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaveFavoritesComponent {
  @Input()
  public item: BookInfo;

  constructor(private favoritesService: FavoritesService) {
  }

  public save(): void {
    this.favoritesService.save(this.item);
  }
}
