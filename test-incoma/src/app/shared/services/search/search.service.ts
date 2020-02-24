import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "@api/api.service";
import { BookInfo } from "@sharedModels/book-info.type";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchTerm$ = new BehaviorSubject<string>('');

  constructor(private apiService: ApiService) {
  }

  public setSearchTerm = (value: string) => this.searchTerm$.next(value);

  public getBooksList = (startIndex: number): Observable<BookInfo[]> => {
    const search = this.searchTerm$.getValue();
    if (!search) {
      return null;
    }

    return this.apiService.getBooksList(startIndex, search);
  }
}
