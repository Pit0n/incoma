import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListDataSource } from "../../shared/components/list-scroller/list-data-source";
import { FilterService } from "@sharedServices/filter/filter.service";
import { SearchService } from "@sharedServices/search/search.service";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public dataSource: ListDataSource;

  constructor(private searchService: SearchService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.searchService.searchTerm$.pipe(
      filter(searchTerm => !!searchTerm)
    )
      .subscribe(() => {
        this.dataSource = new ListDataSource(this.searchService, this.filterService);
      });
  }

}
