import { TestBed } from '@angular/core/testing';

import { DataSharingExampleService } from './data-sharing-example.service';

describe('DataSharingExampleService', () => {
  let service: DataSharingExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSharingExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
