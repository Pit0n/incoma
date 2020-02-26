import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from "@sharedServices/api/api.service";
import { BookInfo } from "@sharedModels/book-info.type";
import { SearchBookListInterface } from "@sharedModels/search-book-list.interface";
import { FilterService } from "@sharedServices/filter/filter.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService implements SearchBookListInterface {
  public searchTerm$ = new BehaviorSubject<string>('');
  private cachedList = Array.from<BookInfo>({length: 0});

  constructor(private apiService: ApiService, private filterService: FilterService) {
    this.searchTerm$.subscribe(_ => this.cachedList = []);
  }

  public setSearchTerm = (value: string) => this.searchTerm$.next(value);

  public getBooksList = (startIndex: number): Observable<BookInfo[]> => {
    const filterByTitle = search => item => item.volumeInfo.title.toLowerCase().includes(search.toLowerCase());
    const filterBookList = ([search, list]) => list.filter(filterByTitle(search));

    return combineLatest([
      this.filterService.searchTerm$,
      this.getCachedList$(startIndex)
    ]).pipe(map(filterBookList))
  };

  private getCachedList$(startIndex: number): Observable<BookInfo[]> {
    const search = this.searchTerm$.getValue();
    if (!search) {
      return of([]);
    }

    if (this.cachedList.length > startIndex) {
      return of(this.cachedList);
    }

    return this.apiService.getBooksList(startIndex, search)
      .pipe(
        map((res) => {
          this.cachedList = this.cachedList.concat(res);
          return this.cachedList;
        })
      )
  }
}
