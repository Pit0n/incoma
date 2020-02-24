import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { Links } from "../../app-routing/links.const";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Search result', icon: 'pi pi-list', routerLink:[Links.search]},
      {label: 'Favorites', icon: 'pi pi-thumbs-up', routerLink:[Links.favorites]}
    ];
  }
}
