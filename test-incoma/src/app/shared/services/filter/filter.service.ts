import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public searchTerm$ = new BehaviorSubject<string>('');
  public setSearchTerm = (value: string) => this.searchTerm$.next(value);
}
