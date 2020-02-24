import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListDataSource } from "../../shared/components/list-scroller/list-data-source";
import { FilterService } from "@sharedServices/filter/filter.service";
import { SearchService } from "@sharedServices/search/search.service";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  public dataSource: ListDataSource;

  private unsubscribe$ = new Subject();

  constructor(private searchService: SearchService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.searchService.searchTerm$.pipe(
      filter(searchTerm => !!searchTerm),
      takeUntil(this.unsubscribe$)
    )
      .subscribe(() => {
        this.dataSource = new ListDataSource(this.searchService, this.filterService);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
      this.unsubscribe$.complete();
  }

}
