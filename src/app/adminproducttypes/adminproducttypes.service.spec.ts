import { TestBed } from '@angular/core/testing';

import { AdminproducttypesService } from './adminproducttypes.service';

describe('AdminproducttypesService', () => {
  let service: AdminproducttypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminproducttypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
