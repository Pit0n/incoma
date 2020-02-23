import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

import { ApiService } from "@api/api.service";
import { BookInfo } from "@sharedModels/book-info.type";


export class ListDataSource extends DataSource<BookInfo | undefined> {
  private cachedFacts = Array.from<BookInfo>({ length: 0 });
  private dataStream = new BehaviorSubject<(BookInfo | undefined)[]>(this.cachedFacts);
  private subscription = new Subscription();
  private pageSize = 10;
  private lastPage = 0;

  constructor(private apiService: ApiService) {
    super();
    // Start with some data.
    console.log('www');
    this._fetchFactPage();
  }

  connect(collectionViewer: CollectionViewer): Observable<(BookInfo | undefined)[] | ReadonlyArray<BookInfo | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {

      const currentPage = this._getPageForIndex(range.end);

      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this._fetchFactPage();
      }

    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _fetchFactPage(): void {
    for (let i = 0; i < this.pageSize; ++i) {
      this.apiService.getBooksList().subscribe(res => {
        this.cachedFacts = this.cachedFacts.concat(res);
        this.dataStream.next(this.cachedFacts);
      });
    }
  }

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }
}
