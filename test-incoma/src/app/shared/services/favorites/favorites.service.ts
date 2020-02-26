import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { SearchBookListInterface } from "@sharedModels/search-book-list.interface";
import { LocalStorageService } from "@sharedServices/local-storage/local-storage.service";
import { BookInfo } from "@sharedModels/book-info.type";
import { VirtualScrollPageSize } from "../../consts/virtual-scroll-page-size.const";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements SearchBookListInterface {
  public updateScrollList$ = new BehaviorSubject<boolean>(true);
  private keyStorage = 'bookList';
  private favoriteMap = new Map();
  private favoriteList: BookInfo[] = [];
  private pageSize = VirtualScrollPageSize;

  constructor(private localStorage: LocalStorageService) {
    this.setFavoriteMapFromLocalStorage();
  }

  public getBooksList = (startIndex: number): Observable<BookInfo[]> => {
    const list = this.favoriteList.slice(0, startIndex + this.pageSize);

    return of(list);
  };

  public save = (item: BookInfo) => {
    if (this.favoriteMap.has(item.id)) {
      return;
    }

    this.favoriteMap.set(item.id, item);
    this.updateFavoriteList();
  };

  public delete = (item: BookInfo) => {
    this.favoriteMap.delete(item.id);
    this.updateFavoriteList();
    this.updateScrollList$.next(true);
  };

  private updateFavoriteList = () => {
    const list = [...this.favoriteMap];
    this.localStorage.set(this.keyStorage, list);
    this.favoriteList = [...this.favoriteMap.values()];
  };

  private setFavoriteMapFromLocalStorage = () => {
    const list = this.localStorage.get(this.keyStorage);
    this.favoriteMap = new Map(list);
    this.favoriteList = [...this.favoriteMap.values()];
  };
}
