import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "@api/api.service";
import { SearchResultComponent } from './search-result.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultComponent ],
      providers: [ApiService],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
