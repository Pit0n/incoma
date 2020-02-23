import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Search result', icon: 'pi pi-list', routerLink:['']},
      {label: 'Favorites', icon: 'pi pi-thumbs-up', routerLink:['favorites']}
    ];
  }
}
