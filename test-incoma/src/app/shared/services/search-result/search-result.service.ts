import { Injectable } from '@angular/core';
import { ApiService } from "@api/api.service";

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private apiService: ApiService) { }

  public search(searchStr: string): void {

  }
}
