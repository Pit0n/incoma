import { Observable } from "rxjs";
import { BookInfo } from "@sharedModels/book-info.type";

export interface SearchBookListInterface {
  getBooksList: (startIndex: number) => Observable<BookInfo[]>
}
