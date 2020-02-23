import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public submitForm(): void {
    const searchControl = this.form.controls['filter'];
    console.log(searchControl.value);
    this.form.reset();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      filter: [''],
    });
  }
}
