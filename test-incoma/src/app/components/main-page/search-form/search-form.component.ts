import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SearchService } from "@sharedServices/search/search.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private searchService: SearchService) { }

  ngOnInit() {
    this.initForm();
  }

  public submitForm(): void {
    const searchControl = this.form.controls['search'];
    this.searchService.setSearchTerm(searchControl.value);
    this.form.reset();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      search: [''],
    });
  }
}
