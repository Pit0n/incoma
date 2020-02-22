import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { BooksList } from "../models/book-info.type";

export const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
export const fields = 'totalItems,items(id,saleInfo(retailPrice,buyLink),accessInfo/webReaderLink,volumeInfo(title,authors,publisher,publishedDate,language,imageLinks/smallThumbnail))';
export const search = 'angular material';
export const startIndex = '100';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getBooksList(): Observable<BooksList> {
    const url = baseUrl;
    const params = new HttpParams()
      .set('q', search)
      .set('startIndex', startIndex)
      .set('fields', fields);

    return this.http.get<BooksList>(url, {params});
  }
}
