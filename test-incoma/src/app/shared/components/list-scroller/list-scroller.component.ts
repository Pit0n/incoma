import { Component } from '@angular/core';
import { ApiService } from "@api/api.service";
import { ListDataSource } from "./list-data-source";

@Component({
  selector: 'app-list-scroller',
  templateUrl: './list-scroller.component.html',
  styleUrls: ['./list-scroller.component.scss']
})
export class ListScrollerComponent {
  public dataSource: ListDataSource;

  constructor(private apiService: ApiService) {
    this.dataSource = new ListDataSource(apiService);
  }
}
