import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from "@api/api.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

}
