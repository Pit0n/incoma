import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public submitForm(): void {
    const searchControl = this.form.controls['search'];
    console.log(searchControl.value);
    this.form.reset();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      search: [''],
    });
  }
}
