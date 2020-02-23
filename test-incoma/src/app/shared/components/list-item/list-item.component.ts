import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookInfo } from "@sharedModels/book-info.type";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input()
  public item: BookInfo;

  public retailButtonText(price: number): string {
    return `Купить за ${price} ₽`;
  }

  public openUrl(url: string): void {
    window.open(url, "_blank");
  }
}
