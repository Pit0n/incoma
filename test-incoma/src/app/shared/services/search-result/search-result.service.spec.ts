import { TestBed } from '@angular/core/testing';

import { SearchResultService } from './search-result.service';
import { ApiService } from "@api/api.service";
import { HttpClientModule } from "@angular/common/http";

describe('SearchResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ApiService],
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: SearchResultService = TestBed.get(SearchResultService);
    expect(service).toBeTruthy();
  });
});
