import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListDataSource } from "../../shared/components/list-scroller/list-data-source";
import { FilterService } from "@sharedServices/filter/filter.service";
import { FavoritesService } from "@sharedServices/favorites/favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  public dataSource: ListDataSource;

  private updateScrollList$ = this.favoritesService.updateScrollList$;

  constructor(private favoritesService: FavoritesService, private filterService: FilterService) {

    this.updateScrollList$.subscribe(() => {
      console.log('w');
      this.dataSource = new ListDataSource(this.favoritesService, this.filterService);
    });
  }
}
