import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ListDataSource } from "../../shared/components/list-scroller/list-data-source";
import { FilterService } from "@sharedServices/filter/filter.service";
import { FavoritesService } from "@sharedServices/favorites/favorites.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnDestroy {
  public dataSource: ListDataSource;
  private unsubscribe$ = new Subject();

  private updateScrollList$ = this.favoritesService.updateScrollList$;

  constructor(private favoritesService: FavoritesService, private filterService: FilterService) {
    this.updateScrollList$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.dataSource = new ListDataSource(this.favoritesService, this.filterService);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
