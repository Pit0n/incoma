import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScrollerComponent } from './list-scroller.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ApiService } from "@sharedServices/api/api.service";
import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from "@angular/cdk/scrolling";

describe('ListScrollerComponent', () => {
  let component: ListScrollerComponent;
  let fixture: ComponentFixture<ListScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListScrollerComponent ],
      providers: [ApiService],
      imports: [HttpClientModule, ScrollingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
