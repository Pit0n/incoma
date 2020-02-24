import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public get = (key?: string) => {
    return JSON.parse(localStorage.getItem(key));
  };

  public set = (key: string, value: any): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  };

  public remove = (key: string) => {
    return localStorage.removeItem(key);
  };
}
