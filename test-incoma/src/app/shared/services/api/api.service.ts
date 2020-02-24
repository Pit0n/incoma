import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { BookInfo, BooksList } from "@sharedModels/book-info.type";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getBooksList(startIndex: number, search: string): Observable<BookInfo[]> {
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const fields = 'items(id,saleInfo(retailPrice,buyLink),accessInfo/webReaderLink,volumeInfo(title,authors,publisher,publishedDate,language,imageLinks/smallThumbnail))';

    const params = new HttpParams()
      .set('q', search)
      .set('startIndex', String(startIndex))
      .set('fields', fields);

    return this.http.get<BooksList>(url, {params})
      .pipe(pluck('items'));
  }
}
