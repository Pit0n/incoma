import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { SearchBookListInterface } from "@sharedModels/search-book-list.interface";
import { LocalStorageService } from "@sharedServices/local-storage/local-storage.service";
import { BookInfo } from "@sharedModels/book-info.type";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements SearchBookListInterface {
  private keyStorage = 'bookList';
  private favoriteList$ = new BehaviorSubject<BookInfo[]>(null);

  constructor(private localStorage: LocalStorageService) {
    this.favoriteList$.next(localStorage.get(this.keyStorage));
  }

  public getBooksList = (startIndex: number): Observable<BookInfo[]> => {
    return of(null);
  };

  public save = (item: BookInfo) => {
    let list = this.favoriteList$.getValue();
    list = list ? [...list, item] : [item];
    this.localStorage.set(this.keyStorage, list);
    this.favoriteList$.next(list);
  }
}
