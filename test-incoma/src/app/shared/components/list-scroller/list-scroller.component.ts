import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from "@api/api.service";
import { ListDataSource } from "./list-data-source";
import { FilterService } from "@sharedServices/filter/filter.service";

@Component({
  selector: 'app-list-scroller',
  templateUrl: './list-scroller.component.html',
  styleUrls: ['./list-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListScrollerComponent {
  public dataSource: ListDataSource;

  constructor(private apiService: ApiService, private filterService: FilterService) {
    this.dataSource = new ListDataSource(apiService, filterService);
  }
}
