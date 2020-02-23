import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

export const item = {
  "id": "9LbjCwAAQBAJ",
  "volumeInfo": {
    "title": "Angular 4. Быстрая разработка сверхдинамических Web-сайтов на TypeScript и PHP",
    "authors": [
      "Brad Dayley",
      "Brendan Dayley",
      "Caleb Dayley"
    ],
    "publisher": "Packt Publishing Ltd",
    "publishedDate": "2016-03-30",
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=9LbjCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
    "language": "en"
  },
  "saleInfo": {
    "retailPrice": {
      "amount": 1681.55,
      "currencyCode": "RUB"
    },
    "buyLink": "https://play.google.com/store/books/details?id=9LbjCwAAQBAJ&rdid=book-9LbjCwAAQBAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
    "webReaderLink": "http://play.google.com/books/reader?id=9LbjCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api"
  }
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public item = item;

  constructor() { }

  ngOnInit() {
  }

  public retailButtonText(price: number): string {
    return `Купить за ${price} ₽`;
  }

  public openUrl(url: string): void {
    window.open(url, "_blank");
  }
}
