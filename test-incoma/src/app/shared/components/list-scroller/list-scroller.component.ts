import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListDataSource } from "./list-data-source";

@Component({
  selector: 'app-list-scroller',
  templateUrl: './list-scroller.component.html',
  styleUrls: ['./list-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListScrollerComponent {
  @Input()
  public dataSource: ListDataSource;
}
