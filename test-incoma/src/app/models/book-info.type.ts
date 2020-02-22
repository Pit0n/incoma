export type BookInfo = {
  id: string,
  volumeInfo: {
    title: string,
    authors: string[],
    publisher: string,
    publishedDate: string,
    imageLinks: {
      smallThumbnail: string,
    },
    language: string,
  },
  saleInfo: {
    retailPrice: {
      amount: number,
      currencyCode: string
    },
    buyLink: string
  },
  accessInfo: {
    webReaderLink: string,
  }
}

export type BooksList = {
  totalItems: number,
  items: BookInfo[],
}
