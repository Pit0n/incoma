import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, combineLatest, Observable, Subject } from "rxjs";
import { map, takeUntil, tap } from "rxjs/operators";
import { BookInfo } from "@sharedModels/book-info.type";
import { FilterService } from "@sharedServices/filter/filter.service";
import { SearchService } from "@sharedServices/search/search.service";


export class ListDataSource extends DataSource<BookInfo | undefined> {
  private cachedList = Array.from<BookInfo>({length: 0});
  private dataStream$ = new BehaviorSubject<(BookInfo | undefined)[]>(this.cachedList);
  // private booksList$ = new BehaviorSubject<BookInfo[]>([]);
  private unsubscribe$ = new Subject();
  private pageSize = 10;
  private lastPage = 0;

  constructor(private searchService: SearchService, private filterService: FilterService) {
    super();
    this._fetchListPage();
    // this.subscribeToFilteredDataStream();
  }

  connect(collectionViewer: CollectionViewer): Observable<(BookInfo | undefined)[] | ReadonlyArray<BookInfo | undefined>> {
    collectionViewer.viewChange
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(range => {
        const currentPage = this._getPageForIndex(range.end);

        if (currentPage > this.lastPage) {
          this.lastPage = currentPage;
          this._fetchListPage();
        }
      });

    return this.dataStream$;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private _fetchListPage(): void {
    const page = this.lastPage * this.pageSize;

    this.searchService.getBooksList(page).subscribe(res => {
      this.cachedList = this.cachedList.concat(res);
      this.dataStream$.next(this.cachedList);
    });
  }

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }

  // private subscribeToFilteredDataStream(): void {
  //   const filterByTitle = search => item => item.volumeInfo.title.toLowerCase().includes(search.toLowerCase());
  //   const filterBookList = ([search, list]) => list.filter(filterByTitle(search));
  //
  //   combineLatest([
  //     this.filterService.searchTerm$.pipe(),
  //     this.booksList$
  //   ])
  //     .pipe(
  //       map(filterBookList),
  //       takeUntil(this.unsubscribe$)
  //     )
  //     .subscribe(res => this.dataStream$.next(res));
  // }
}
