import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { FilterService } from "@sharedServices/filter/filter.service";


@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterFormComponent implements OnInit, OnDestroy {
  @Output()
  public form: FormGroup;
  private unsubscribe$ = new Subject();

  constructor(private formBuilder: FormBuilder, private filterService: FilterService) {
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToFilterChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      filter: [''],
    });
  }

  private subscribeToFilterChange(): void {
    this.form.controls['filter'].valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(this.filterService.setSearchTerm);
  }
}
