import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ListDataSource } from "../../shared/components/list-scroller/list-data-source";
import { FilterService } from "@sharedServices/filter/filter.service";
import { FavoritesService } from "@sharedServices/favorites/favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit, OnDestroy {
  public dataSource: ListDataSource;
  private unsubscribe$ = new Subject();

  private updateScrollList$ = this.favoritesService.updateScrollList$;

  constructor(private favoritesService: FavoritesService, private filterService: FilterService) {
  }

  ngOnInit(): void {
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
