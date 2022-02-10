import { TestBed } from '@angular/core/testing';

import { PixaService } from './pixa.service';

describe('PixaService', () => {
  let service: PixaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
