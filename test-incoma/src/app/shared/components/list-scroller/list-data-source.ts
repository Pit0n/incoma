import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BookInfo } from "@sharedModels/book-info.type";
import { SearchBookListInterface } from "@sharedModels/search-book-list.interface";
import { VirtualScrollPageSize } from "../../consts/virtual-scroll-page-size.const";


export class ListDataSource extends DataSource<BookInfo | undefined> {
  private dataStream$ = new BehaviorSubject<(BookInfo | undefined)[]>([]);
  private unsubscribe$ = new Subject();
  private pageSize = VirtualScrollPageSize;
  private lastPage = 0;

  constructor(private listService: SearchBookListInterface) {
    super();
    this._fetchListPage();
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

    this.listService.getBooksList(page)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => this.dataStream$.next(res));
  }

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }
}
